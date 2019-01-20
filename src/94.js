function recursive(node, arr) {
  if (node == null) {
    return;
  }

  recursive(node.left, arr);
  arr.push(node.val);
  recursive(node.right, arr);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
module.exports.fn = function inorderTraversal(root) {
  const ret = [];
  recursive(root, ret);
  return ret;
};

module.exports.testData = [
  {
    args: [
      {
        val: 1,
        left: null,
        right: {
          val: 2,
          left: {
            val: 3,
            left: null,
            right: null,
          },
          right: null,
        },
      },
    ],
    expected: [1, 3, 2],
  },
];
