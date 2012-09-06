

function Tree(url) {

    var _url = url;


    this.get_tree = function(tree_id, options)
    {
	var resp = json_call_ajax_sync("Tree.get_tree", [tree_id, options]);
//	var resp = json_call_sync("Tree.get_tree", [tree_id, options]);
        return resp[0];
    }

    this.get_tree_async = function(tree_id, options, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.get_tree", [tree_id, options], 1, _callback, _error_callback)
    }

    this.get_trees = function(tree_ids, options)
    {
	var resp = json_call_ajax_sync("Tree.get_trees", [tree_ids, options]);
//	var resp = json_call_sync("Tree.get_trees", [tree_ids, options]);
        return resp[0];
    }

    this.get_trees_async = function(tree_ids, options, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.get_trees", [tree_ids, options], 1, _callback, _error_callback)
    }

    this.all_tree_ids = function(is_active)
    {
	var resp = json_call_ajax_sync("Tree.all_tree_ids", [is_active]);
//	var resp = json_call_sync("Tree.all_tree_ids", [is_active]);
        return resp[0];
    }

    this.all_tree_ids_async = function(is_active, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.all_tree_ids", [is_active], 1, _callback, _error_callback)
    }

    this.get_kbase_ids_from_alignment_row = function(alignment_id, row_number)
    {
	var resp = json_call_ajax_sync("Tree.get_kbase_ids_from_alignment_row", [alignment_id, row_number]);
//	var resp = json_call_sync("Tree.get_kbase_ids_from_alignment_row", [alignment_id, row_number]);
        return resp[0];
    }

    this.get_kbase_ids_from_alignment_row_async = function(alignment_id, row_number, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.get_kbase_ids_from_alignment_row", [alignment_id, row_number], 1, _callback, _error_callback)
    }

    this.get_trees_with_entire_seq = function(sequence, beg, end, options)
    {
	var resp = json_call_ajax_sync("Tree.get_trees_with_entire_seq", [sequence, beg, end, options]);
//	var resp = json_call_sync("Tree.get_trees_with_entire_seq", [sequence, beg, end, options]);
        return resp[0];
    }

    this.get_trees_with_entire_seq_async = function(sequence, beg, end, options, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.get_trees_with_entire_seq", [sequence, beg, end, options], 1, _callback, _error_callback)
    }

    this.get_trees_with_overlapping_seq = function(sequence, beg, end, options)
    {
	var resp = json_call_ajax_sync("Tree.get_trees_with_overlapping_seq", [sequence, beg, end, options]);
//	var resp = json_call_sync("Tree.get_trees_with_overlapping_seq", [sequence, beg, end, options]);
        return resp[0];
    }

    this.get_trees_with_overlapping_seq_async = function(sequence, beg, end, options, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.get_trees_with_overlapping_seq", [sequence, beg, end, options], 1, _callback, _error_callback)
    }

    this.get_trees_with_entire_domain = function(domain, options)
    {
	var resp = json_call_ajax_sync("Tree.get_trees_with_entire_domain", [domain, options]);
//	var resp = json_call_sync("Tree.get_trees_with_entire_domain", [domain, options]);
        return resp[0];
    }

    this.get_trees_with_entire_domain_async = function(domain, options, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.get_trees_with_entire_domain", [domain, options], 1, _callback, _error_callback)
    }

    this.get_trees_with_overlapping_domain = function(domain, options)
    {
	var resp = json_call_ajax_sync("Tree.get_trees_with_overlapping_domain", [domain, options]);
//	var resp = json_call_sync("Tree.get_trees_with_overlapping_domain", [domain, options]);
        return resp[0];
    }

    this.get_trees_with_overlapping_domain_async = function(domain, options, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.get_trees_with_overlapping_domain", [domain, options], 1, _callback, _error_callback)
    }

    this.substitute_node_names_with_kbase_ids = function(trees, options)
    {
	var resp = json_call_ajax_sync("Tree.substitute_node_names_with_kbase_ids", [trees, options]);
//	var resp = json_call_sync("Tree.substitute_node_names_with_kbase_ids", [trees, options]);
        return resp[0];
    }

    this.substitute_node_names_with_kbase_ids_async = function(trees, options, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.substitute_node_names_with_kbase_ids", [trees, options], 1, _callback, _error_callback)
    }

    this.extract_leaf_node_names = function(tree)
    {
	var resp = json_call_ajax_sync("Tree.extract_leaf_node_names", [tree]);
//	var resp = json_call_sync("Tree.extract_leaf_node_names", [tree]);
        return resp[0];
    }

    this.extract_leaf_node_names_async = function(tree, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.extract_leaf_node_names", [tree], 1, _callback, _error_callback)
    }

    this.extract_node_names = function(tree)
    {
	var resp = json_call_ajax_sync("Tree.extract_node_names", [tree]);
//	var resp = json_call_sync("Tree.extract_node_names", [tree]);
        return resp[0];
    }

    this.extract_node_names_async = function(tree, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.extract_node_names", [tree], 1, _callback, _error_callback)
    }

    this.get_node_count = function(tree)
    {
	var resp = json_call_ajax_sync("Tree.get_node_count", [tree]);
//	var resp = json_call_sync("Tree.get_node_count", [tree]);
        return resp[0];
    }

    this.get_node_count_async = function(tree, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.get_node_count", [tree], 1, _callback, _error_callback)
    }

    this.get_leaf_count = function(tree)
    {
	var resp = json_call_ajax_sync("Tree.get_leaf_count", [tree]);
//	var resp = json_call_sync("Tree.get_leaf_count", [tree]);
        return resp[0];
    }

    this.get_leaf_count_async = function(tree, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.get_leaf_count", [tree], 1, _callback, _error_callback)
    }

    this.replace_node_names = function(tree, replacements)
    {
	var resp = json_call_ajax_sync("Tree.replace_node_names", [tree, replacements]);
//	var resp = json_call_sync("Tree.replace_node_names", [tree, replacements]);
        return resp[0];
    }

    this.replace_node_names_async = function(tree, replacements, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.replace_node_names", [tree, replacements], 1, _callback, _error_callback)
    }

    this.remove_node_names_and_simplify = function(tree, removal_list)
    {
	var resp = json_call_ajax_sync("Tree.remove_node_names_and_simplify", [tree, removal_list]);
//	var resp = json_call_sync("Tree.remove_node_names_and_simplify", [tree, removal_list]);
        return resp[0];
    }

    this.remove_node_names_and_simplify_async = function(tree, removal_list, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.remove_node_names_and_simplify", [tree, removal_list], 1, _callback, _error_callback)
    }

    this.add_node_to_tree = function(tree_id, sequence_id, options)
    {
	var resp = json_call_ajax_sync("Tree.add_node_to_tree", [tree_id, sequence_id, options]);
//	var resp = json_call_sync("Tree.add_node_to_tree", [tree_id, sequence_id, options]);
        return resp[0];
    }

    this.add_node_to_tree_async = function(tree_id, sequence_id, options, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.add_node_to_tree", [tree_id, sequence_id, options], 1, _callback, _error_callback)
    }

    this.build_tree_from_sequences = function(sequences, options)
    {
	var resp = json_call_ajax_sync("Tree.build_tree_from_sequences", [sequences, options]);
//	var resp = json_call_sync("Tree.build_tree_from_sequences", [sequences, options]);
        return resp[0];
    }

    this.build_tree_from_sequences_async = function(sequences, options, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.build_tree_from_sequences", [sequences, options], 1, _callback, _error_callback)
    }

    this.build_tree_from_fasta = function(fasta_files, options)
    {
	var resp = json_call_ajax_sync("Tree.build_tree_from_fasta", [fasta_files, options]);
//	var resp = json_call_sync("Tree.build_tree_from_fasta", [fasta_files, options]);
        return resp[0];
    }

    this.build_tree_from_fasta_async = function(fasta_files, options, _callback, _error_callback)
    {
	json_call_ajax_async("Tree.build_tree_from_fasta", [fasta_files, options], 1, _callback, _error_callback)
    }

    function _json_call_prepare(url, method, params, async_flag)
    {
	var rpc = { 'params' : params,
		    'method' : method,
		    'version': "1.1",
	};
	
	var body = JSON.stringify(rpc);
	
	var http = new XMLHttpRequest();
	
	http.open("POST", url, async_flag);
	
	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/json");
	//http.setRequestHeader("Content-length", body.length);
	//http.setRequestHeader("Connection", "close");
	return [http, body];
    }

    /*
     * JSON call using jQuery method.
     */

    function json_call_ajax_sync(method, params)
    {
        var rpc = { 'params' : params,
                    'method' : method,
                    'version': "1.1",
        };
        
        var body = JSON.stringify(rpc);
        var resp_txt;
	var code;
        
        var x = jQuery.ajax({       "async": false,
                                    dataType: "text",
                                    url: _url,
                                    success: function (data, status, xhr) { resp_txt = data; code = xhr.status },
				    error: function(xhr, textStatus, errorThrown) { resp_txt = xhr.responseText, code = xhr.status },
                                    data: body,
                                    processData: false,
                                    type: 'POST',
				    });

        var result;

        if (resp_txt)
        {
	    var resp = JSON.parse(resp_txt);
	    
	    if (code >= 500)
	    {
		throw resp.error;
	    }
	    else
	    {
		return resp.result;
	    }
        }
	else
	{
	    return null;
	}
    }

    function json_call_ajax_async(method, params, num_rets, callback, error_callback)
    {
        var rpc = { 'params' : params,
                    'method' : method,
                    'version': "1.1",
        };
        
        var body = JSON.stringify(rpc);
        var resp_txt;
	var code;
        
        var x = jQuery.ajax({       "async": true,
                                    dataType: "text",
                                    url: _url,
                                    success: function (data, status, xhr)
				{
				    resp = JSON.parse(data);
				    var result = resp["result"];
				    if (num_rets == 1)
				    {
					callback(result[0]);
				    }
				    else
				    {
					callback(result);
				    }
				    
				},
				    error: function(xhr, textStatus, errorThrown)
				{
				    if (xhr.responseText)
				    {
					resp = JSON.parse(xhr.responseText);
					if (error_callback)
					{
					    error_callback(resp.error);
					}
					else
					{
					    throw resp.error;
					}
				    }
				},
                                    data: body,
                                    processData: false,
                                    type: 'POST',
				    });

    }

    function json_call_async(method, params, num_rets, callback)
    {
	var tup = _json_call_prepare(_url, method, params, true);
	var http = tup[0];
	var body = tup[1];
	
	http.onreadystatechange = function() {
	    if (http.readyState == 4 && http.status == 200) {
		var resp_txt = http.responseText;
		var resp = JSON.parse(resp_txt);
		var result = resp["result"];
		if (num_rets == 1)
		{
		    callback(result[0]);
		}
		else
		{
		    callback(result);
		}
	    }
	}
	
	http.send(body);
	
    }
    
    function json_call_sync(method, params)
    {
	var tup = _json_call_prepare(url, method, params, false);
	var http = tup[0];
	var body = tup[1];
	
	http.send(body);
	
	var resp_txt = http.responseText;
	
	var resp = JSON.parse(resp_txt);
	var result = resp["result"];
	    
	return result;
    }
}
