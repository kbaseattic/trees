/* ----------------------------------------------------------------------------
 * This file was automatically generated by SWIG (http://www.swig.org).
 * Version 2.0.7
 *
 * Do not make changes to this file unless you know what you are doing--modify
 * the SWIG interface file instead.
 * ----------------------------------------------------------------------------- */

package KBTreeUtil;

public class KBTree {
  private long swigCPtr;
  protected boolean swigCMemOwn;

  protected KBTree(long cPtr, boolean cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = cPtr;
  }

  protected static long getCPtr(KBTree obj) {
    return (obj == null) ? 0 : obj.swigCPtr;
  }

  protected void finalize() {
    delete();
  }

  public synchronized void delete() {
    if (swigCPtr != 0) {
      if (swigCMemOwn) {
        swigCMemOwn = false;
        KBTreeUtilJNI.delete_KBTree(swigCPtr);
      }
      swigCPtr = 0;
    }
  }

  public KBTree(String newickString) {
    this(KBTreeUtilJNI.new_KBTree__SWIG_0(newickString), true);
  }

  public KBTree(String newickString, boolean verbose) {
    this(KBTreeUtilJNI.new_KBTree__SWIG_1(newickString, verbose), true);
  }

  public KBTree(String newickString, boolean verbose, boolean assumeBootstrapNames) {
    this(KBTreeUtilJNI.new_KBTree__SWIG_2(newickString, verbose, assumeBootstrapNames), true);
  }

  public String toNewick() {
    return KBTreeUtilJNI.KBTree_toNewick__SWIG_0(swigCPtr, this);
  }

  public String toNewick(long style) {
    return KBTreeUtilJNI.KBTree_toNewick__SWIG_1(swigCPtr, this, style);
  }

  public boolean writeNewickToFile(String filename) {
    return KBTreeUtilJNI.KBTree_writeNewickToFile__SWIG_0(swigCPtr, this, filename);
  }

  public boolean writeNewickToFile(String filename, long style) {
    return KBTreeUtilJNI.KBTree_writeNewickToFile__SWIG_1(swigCPtr, this, filename, style);
  }

  public void removeNodesByNameAndSimplify(String nodeNames) {
    KBTreeUtilJNI.KBTree_removeNodesByNameAndSimplify(swigCPtr, this, nodeNames);
  }

  public void printTree() {
    KBTreeUtilJNI.KBTree_printTree(swigCPtr, this);
  }

  public long getNodeCount() {
    return KBTreeUtilJNI.KBTree_getNodeCount(swigCPtr, this);
  }

  public long getLeafCount() {
    return KBTreeUtilJNI.KBTree_getLeafCount(swigCPtr, this);
  }

}
