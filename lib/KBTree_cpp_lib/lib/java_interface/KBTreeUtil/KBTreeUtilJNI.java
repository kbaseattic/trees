/* ----------------------------------------------------------------------------
 * This file was automatically generated by SWIG (http://www.swig.org).
 * Version 2.0.7
 *
 * Do not make changes to this file unless you know what you are doing--modify
 * the SWIG interface file instead.
 * ----------------------------------------------------------------------------- */

package KBTreeUtil;

public class KBTreeUtilJNI {
  public final static native long new_KBTree__SWIG_0(String jarg1);
  public final static native long new_KBTree__SWIG_1(String jarg1, boolean jarg2);
  public final static native void delete_KBTree(long jarg1);
  public final static native String KBTree_toNewick__SWIG_0(long jarg1, KBTree jarg1_);
  public final static native String KBTree_toNewick__SWIG_1(long jarg1, KBTree jarg1_, long jarg2);
  public final static native boolean KBTree_writeNewickToFile__SWIG_0(long jarg1, KBTree jarg1_, String jarg2);
  public final static native boolean KBTree_writeNewickToFile__SWIG_1(long jarg1, KBTree jarg1_, String jarg2, long jarg3);
  public final static native void KBTree_removeNodesByNameAndSimplify(long jarg1, KBTree jarg1_, String jarg2);
  public final static native void KBTree_printTree(long jarg1, KBTree jarg1_);
  public final static native long KBTree_getNodeCount(long jarg1, KBTree jarg1_);
  public final static native long KBTree_getLeafCount(long jarg1, KBTree jarg1_);
}