/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
module.exports.fn = function buildTree(inorder, postorder) {
  if (inorder.length === 0) return null;

  if (inorder.length === 1) {
    return { val: inorder[0], left: null, right: null };
  }

  const len = postorder.length;
  const val = postorder[len - 1];
  const idx = inorder.indexOf(val);
  return {
    val,
    left: buildTree(inorder.slice(0, idx), postorder.slice(0, idx)),
    right: buildTree(
      inorder.slice(idx + 1, len),
      postorder.slice(idx, len - 1),
    ),
  };
};

module.exports.testData = [
  {
    args: [[9, 3, 15, 20, 7], [9, 15, 7, 20, 3]],
    expected: {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
    },
  },
];
