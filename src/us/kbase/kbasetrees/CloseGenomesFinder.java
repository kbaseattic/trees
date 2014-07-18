package us.kbase.kbasetrees;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import us.kbase.common.service.Tuple2;
import us.kbase.common.taskqueue.TaskQueueConfig;

public class CloseGenomesFinder {

	public static List<String> findGenomes(String token, FindCloseGenomesParams params,
			TaskQueueConfig config) throws Exception {
		Map<String, String> configParams = config.getAllConfigProps();
		return findGenomes(token, params, DefaultTaskBuilder.getDirParam(configParams, "scratch"), 
				DefaultTaskBuilder.getDirParam(configParams, "data.dir"),
				DefaultTaskBuilder.createDefaultObjectStorage(config.getWsUrl()));
	}
	
	public static List<String> findGenomes(String token, FindCloseGenomesParams params, 
			File tempDir, File dataDir, ObjectStorage ws) throws Exception {
		long maxDist = params.getMaxMismatchPercent() == null ? 5L : params.getMaxMismatchPercent();
		SpeciesTreeBuilder stb = new SpeciesTreeBuilder();
		stb.init(tempDir, dataDir, ws);
		Map<String, String> idLabelMap = new TreeMap<String, String>();
		Map<String, Map<String, List<String>>> idRefMap = 
				new TreeMap<String, Map<String, List<String>>>();
		Set<String> seeds = new HashSet<String>();
		Map<String, String> concat = stb.placeUserGenomesIntoAlignment(token, 
				Arrays.asList(params.getQueryGenome()), true, idLabelMap, idRefMap, seeds);
		List<Tuple2<String, Integer>> kbIdToMinDist = stb.sortPublicGenomesByMismatches(
				seeds, concat);
		Map<String, String> kbToRefs = stb.loadGenomeKbToRefs(token);
		List<String> ret = new ArrayList<String>();
		for (Tuple2<String, Integer> idAndDist : kbIdToMinDist) {
			int dist = idAndDist.getE2();
			if (dist > maxDist)
				break;
			String kbId = idAndDist.getE1();
			String ref = null;
			if (idRefMap.get(kbId) == null) {
				ref = kbToRefs.get(kbId);
				if (ref == null) {
					System.err.println("[trees] CloseGenomeFinder: Can't find genome for kbId=" + kbId);
					continue;
				}
			} else {
				ref = idRefMap.get(kbId).get("g").get(0);
			}
			ret.add(ref);
		}
		return ret;
	}
}
