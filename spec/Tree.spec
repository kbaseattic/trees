/*
KBase Phylogenetic Tree and Multiple Sequence Alignment(MSA) API

Full documentation and API reference will be added here.

created 5/21/2012 - msneddon
last updated 9/4/12
*/
module Tree
{
    typedef int bool;
    typedef string timestamp;
    typedef int position;
    
    /*
    A KBase ID is a string starting with the characters "kb|".  KBase IDs are typed. The types are
    designated using a short string. For instance," g" denotes a genome, "tree" denotes a Tree, and
    "aln" denotes a sequence alignment. KBase IDs may be hierarchical.  For example, if a KBase genome
    identifier is "kb|g.1234", a protein within that genome may be represented as "kb|g.1234.fp.771".
    See the standard KBase documentation for more information.
    */
    typedef string kbase_id;


    /*
    A string representation of a phylogenetic tree.  The format/syntax of the string can be
    specified by using one of the available typedefs declaring a particular format, such as 'newick_tree',
    'phyloXML_tree' or 'json_tree'.  Regardless of format, all leaf nodes in trees built from MSAs are indexed
    to a specific MSA row.  You can use the appropriate functionality of the API to replace these IDs with
    other KBase Ids instead, depending on how the tree was built.  Internal nodes may or may not be named.
    Nodes, depending on the format, may also be annotated with structured data such as bootstrap values.
    */
    typedef string tree;

    /*
    Trees are represented in KBase by default in newick format (http://en.wikipedia.org/wiki/Newick_format)
    and are returned to you in this format by default.  
    */
    typedef tree newick_tree;
    
    /*
    Trees are represented in KBase by default in newick format (http://en.wikipedia.org/wiki/Newick_format),
    but can optionally be converted to the more verbose phyloXML format, which is useful for compatibility or
    when additional information/annotations decorate the tree.
    */
    typedef tree phyloXML_tree;
    
    /*
    Trees are represented in KBase by default in newick format (http://en.wikipedia.org/wiki/Newick_format),
    but can optionally be converted to JSON format where the structure of the tree matches the structure of
    the JSON object.  This is useful when interacting with the tree in JavaScript, for instance. 
    */
    typedef tree json_tree;
    
    
    
    /*
    The string representation of the parsed node name (may be a kbase_id, but does not have to).  Note, this
    is not the full label in a newick_tree (which may include comments or distances)
    */
    typedef string node_name;
    
    
    /*
    String representation of an alignment, the precise syntax and alphabet of which is not yet specified but will
    likely be similar to alignments stored in SEED.
    */
    typedef string fasta_alignment;

    /*
    Meta data about a tree, such as when it was created, parameters used in its creation, etc
    Is this actually needed? Or will this info be accessible through the auto generated methods?
    */
    typedef structure {
        /*some comment here*/
        kbase_id tree_id;
        kbase_id alignment_id;
        string meta_info_hash;
        bool is_active;
        timestamp date_created;
        int tree_generation_method;
        string tree_generation_parameters;
        string source_db;
        string source_db_id;
    } tree_meta_data;

    /*
    Meta data about an alignment, such as when it was created, parameters used in its creation, etc.
    Todo: determine if this object is necessary, and determine what it should contain
    */
    typedef structure {
        kbase_id alignment_id;
        string meta_info_hash;
        bool is_active;
        bool is_concatenation;
        timestamp date_created;
        int n_rows;
        int alignment_method;
        string alignment_parameters;
        string alignment_protocol_description;
        string source_db;
        string source_db_id;
    } alignment_meta_data;
    

    /*
    Returns the specified tree in newick format, or an empty string if the tree does not exist.  Options
    hash provides a way to return the tree with different labels replaced.
    
        options = [
            FORMAT => 'raw' || 'first' || 'all' || 'species_name' ...
        ]
 
    The FORMAT option selects how node labels are replaced in the output tree.  'raw' returns just the
    tree with labels into the AlignmentRowComponent table. 'first' returns the tree with labels replaced
    with only a single kbase_id to a sequence (if there are multiple sequences in the alignment row, then
    only the first is returned).  'all' returns the tree with all the kbase_ids that make up the alignment
    row in a comma-delimited format.  If there is only one sequence in the alignment, then the behavior
    is the same as 'first'.  'species_name' replaces labels with the name of the organism, if available.
    other options???
    
    Note: the options hash will be the same as for other functions which provide substitution cababilities 
    
    todo: provide a way to get meta data about this tree, possibly in a separate function, but may
    not be needed if this is provided by the ER model.
    */
    funcdef get_tree(kbase_id tree_id, mapping<string,string> options) returns (newick_tree);
    
    /*
    Returns a list of the specifed trees in newick format, or an empty string for each tree_id that
    was not found.
    Note: this function may not be needed if this functionality is provided by the auto-gen ER code
    */    
    funcdef get_trees(list<kbase_id> tree_ids, mapping<string,string> options) returns (list<newick_tree>);
    
    /*
    Returns a list of all IDs of all trees in the database that match the given flags (right now
    the only flag indicates if the tree is active or not, meaning the latest version of the tree,
    but this should be extended to accept more args and possible queries.
    Note: this function may not be needed if this functionality is provided by the auto-gen ER code
    */ 
    funcdef all_tree_ids(bool is_active) returns (list <kbase_id>);


    /*
    Given an alignment and a row in the alignment, returns all the kbase_ids of the sequences that compose
    the given tree.
    Note: may not be needed if this functionality is possible via the ER model
    */
    funcdef get_kbase_ids_from_alignment_row(kbase_id alignment_id, int row_number) returns (list<kbase_id>);




    
    /*
    Returns all tree IDs in which the entire portion of the given sequence (which can optionally
    include start and end positions of the sequence) is used in the alignment which generates the
    tree.
    todo: should beg/end just be included in some options hash?
    todo: define contents of options hash, which will allow more complex queries, such as returning
          only active trees, or trees of a particuar hieght, etc...
    */
    funcdef get_trees_with_entire_seq(kbase_id sequence, position beg, position end, mapping<string,string> options) returns (list<kbase_id>);
    
    /*
    Returns all tree IDs in which some portion of the given sequence (which can optionally
    include start and end positions of the sequence) is used in the alignment which generates the
    tree.
    */
    funcdef get_trees_with_overlapping_seq(kbase_id sequence, position beg, position end, mapping<string,string> options) returns (list<kbase_id>);
    
    /*
    Returns all tree IDs in which the entire portion of the given domain is used in the alignment
    which generates the tree (usually the tree will be constructed based on this domain).
    */
    funcdef get_trees_with_entire_domain(kbase_id domain, mapping<string,string>options) returns (list<kbase_id>);
    
    /*
    Returns all tree IDs in which some portion of the given domain is used in the alignment
    which generates the tree (usually the tree will be constructed based on a similar domain created
    with an alternative method, so the entire domain may not be contained).
    */
    funcdef get_trees_with_overlapping_domain(kbase_id domain, mapping<string,string>options) returns (list<kbase_id>);
    




    /*
    Given a list of kbase identifiers for a tree, substitutes the leaf node labels with actual kbase sequence
    identifiers.  If a particular alignment row maps to a single sequence, this is straightforward.  If an
    alignmnt row maps to multiple sequences, then the current behavior is not yet defined (likely will be
    a concatenated list of sequence ids that compose the alignment row).  Options Hash allows addiional
    parameters to be passed (parameter list is also currently not defined yet and is currently ignored.)
    */
    funcdef substitute_node_names_with_kbase_ids(list <kbase_id> trees, mapping<string,string> options) returns (list<newick_tree>);


    /*
    Given a tree, returns the list of names of the leaves.  If the 'substitute_node_names_with_kbase_ids' was already called
    to retrieve the trees, then this method will provide a list of kbase_ids indicating the sequences that comprised the tree.
    */
    funcdef extract_leaf_node_names(newick_tree tree) returns (list<node_name>);
    /*
    Given a tree, returns the list of names of all then nodes (note: for some trees, such as default MO trees, names of internal
    nodes are interpreted as bootstrap values, but are still returned here).  If the 'substitute_node_names_with_kbase_ids' was already called
    to retrieve the trees, then this method will provide a list of kbase_ids indicating the sequences that comprised the tree.
    */
    funcdef extract_node_names(newick_tree tree) returns (list<node_name>);
    /*
    Given a tree, returns the total number of nodes, including internal nodes
    */
    funcdef get_node_count(newick_tree tree) returns (int);
    /*
    Given a tree, returns the total number of leaf nodes, (internal and root nodes are ignored)
    */
    funcdef get_leaf_count(newick_tree tree) returns (int);
    /*
    Given a tree, replace the node names indicated as keys in the input map, and replace them with the values contained in the map.
    */
    funcdef replace_node_names(newick_tree tree, mapping<node_name,node_name>replacements) returns (newick_tree);
    /*
    Given a tree, remove the node names indicated in the list, and simplify the tree.  Simplifying a tree involves removing
    unnamed internal nodes that have only one child, and removing unnamed leaf nodes.  During the removal process, edge lengths
    (if they exist) are conserved so that the end to end distance between any two nodes left in the tree will remain the same.
    */
    funcdef remove_node_names_and_simplify(newick_tree tree, list<node_name>removal_list) returns (newick_tree);
    
    


    /*
    Given a tree and a sequence in kbase, attempt to map that sequence onto the tree, returning the newick representation
    of the tree.
    */
    funcdef add_node_to_tree(kbase_id tree_id, kbase_id sequence_id, mapping<string,string> options) returns (newick_tree);

    /*
    Not sure if we want this, but would allow users to submit a set of sequences, then build a tree.  Here, options
    would support the various alignment options, trimming options, tree-building algorithms.
    todo: this isn't well thought out -> do we return alignments as well?  do we support building MSAs?
    */
    funcdef build_tree_from_sequences(list<kbase_id> sequences, mapping<string,string>options) returns (newick_tree);
    funcdef build_tree_from_fasta(list<string> fasta_files, mapping<string,string>options) returns (newick_tree);




};