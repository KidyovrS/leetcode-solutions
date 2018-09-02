/**
 * Definition for a binary tree node.
 */
function TreeNode(val) { // eslint-disable-line no-unused-vars
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
module.exports.fn = function maxDepth(root) {
  return root == null
    ? 0
    : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

module.exports.testData = [
  {
    args: [
      {
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
    ],
    expected: 3,
  },
];
