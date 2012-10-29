%module KBTreeUtil
%include "std_string.i"
%include "std_map.i"

%{
#include "kbtree/kbtree.hh"
%}


namespace KBTreeLib {

    class KBTree {
        public:
            KBTree(const std::string &newickString);
            KBTree(const std::string &newickString, bool verbose);
            KBTree(const std::string &newickString, bool verbose, bool assumeBootstrapNames);
            ~KBTree();
            
            /*  Returns a newick string representation of the tree */
			std::string toNewick();
			
			void setOutputFlagLabel(bool flag);
			void setOutputFlagDistances(bool flag);
			void setOutputFlagComments(bool flag);
			void setOutputFlagBootstrapValuesAsLabels(bool flag);
			
			
			
			std::string toNewick(unsigned int style);
			
			/*  Writes the newick string representation of the tree to a newick file */
			bool writeNewickToFile(const std::string &filename);
			bool writeNewickToFile(const std::string &filename,unsigned int style);
			
			
			/* given a list of node names (concatenated as name1;name2;name3), this function
			removes any node with an exact matching name from the tree, then simplifies the
			tree by removing any internal nodes with a single child and any leaf nodes without
			a name.  Distances are recomputed so that the distance between existing nodes
			in the original tree and the final tree are conserved. */
			void removeNodesByNameAndSimplify(const std::string &nodeNames);
			
			/* given a list of node names to be replaced (concatented as from1;to1;from2;to2;...), 
			this function renames any node with an exact matching 'from name' from the tree, and
			replaces the name as 'to name'. */
			void replaceNodeNames(const std::string &replacements);
			
			
			/*  Prints the structure of the tree to standard out */
			void printTree();
			
			/* returns the total number of nodes in the tree, including internal nodes */			
            unsigned int getNodeCount() const;
            
            /* returns the total number of leaf nodes (aka tips) in the tree */			
            unsigned int getLeafCount();
            
            /* returns a string of all the leaf node names, concatenated as name1;name2;name3; */
            std::string getAllLeafNames();
            
            /* returns a string of all the node names, concatenated as name1;name2;name3; */
            std::string getAllNodeNames();
    };
    
};

