
package us.kbase.cdmientityapi;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * <p>Original spec-file type: fields_Includes</p>
 * 
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("com.googlecode.jsonschema2pojo")
@JsonPropertyOrder({
    "from_link",
    "to_link",
    "sequence",
    "abbreviation",
    "auxiliary"
})
public class FieldsIncludes {

    @JsonProperty("from_link")
    private String fromLink;
    @JsonProperty("to_link")
    private String toLink;
    @JsonProperty("sequence")
    private Long sequence;
    @JsonProperty("abbreviation")
    private String abbreviation;
    @JsonProperty("auxiliary")
    private Long auxiliary;
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    @JsonProperty("from_link")
    public String getFromLink() {
        return fromLink;
    }

    @JsonProperty("from_link")
    public void setFromLink(String fromLink) {
        this.fromLink = fromLink;
    }

    public FieldsIncludes withFromLink(String fromLink) {
        this.fromLink = fromLink;
        return this;
    }

    @JsonProperty("to_link")
    public String getToLink() {
        return toLink;
    }

    @JsonProperty("to_link")
    public void setToLink(String toLink) {
        this.toLink = toLink;
    }

    public FieldsIncludes withToLink(String toLink) {
        this.toLink = toLink;
        return this;
    }

    @JsonProperty("sequence")
    public Long getSequence() {
        return sequence;
    }

    @JsonProperty("sequence")
    public void setSequence(Long sequence) {
        this.sequence = sequence;
    }

    public FieldsIncludes withSequence(Long sequence) {
        this.sequence = sequence;
        return this;
    }

    @JsonProperty("abbreviation")
    public String getAbbreviation() {
        return abbreviation;
    }

    @JsonProperty("abbreviation")
    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    public FieldsIncludes withAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
        return this;
    }

    @JsonProperty("auxiliary")
    public Long getAuxiliary() {
        return auxiliary;
    }

    @JsonProperty("auxiliary")
    public void setAuxiliary(Long auxiliary) {
        this.auxiliary = auxiliary;
    }

    public FieldsIncludes withAuxiliary(Long auxiliary) {
        this.auxiliary = auxiliary;
        return this;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperties(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    @Override
    public String toString() {
        return ((((((((((((("FieldsIncludes"+" [fromLink=")+ fromLink)+", toLink=")+ toLink)+", sequence=")+ sequence)+", abbreviation=")+ abbreviation)+", auxiliary=")+ auxiliary)+", additionalProperties=")+ additionalProperties)+"]");
    }

}