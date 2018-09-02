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
 * @return {TreeNode}
 */
module.exports.fn = function invertTree(root) {
  if (root == null) {
    return root;
  }
  const t = root.left;
  root.left = invertTree(root.right); // eslint-disable-line no-param-reassign
  root.right = invertTree(t); // eslint-disable-line no-param-reassign
  return root;
};

module.exports.testData = [
  {
    args: [
      {
        val: 4,
        left: {
          val: 2,
          left: {
            val: 1,
            left: null,
            right: null,
          },
          right: {
            val: 3,
            left: null,
            right: null,
          },
        },
        right: {
          val: 7,
          left: {
            val: 6,
            left: null,
            right: null,
          },
          right: {
            val: 9,
            left: null,
            right: null,
          },
        },
      },
    ],
    expected: {
      val: 4,
      left: {
        val: 7,
        left: {
          val: 9,
          left: null,
          right: null,
        },
        right: {
          val: 6,
          left: null,
          right: null,
        },
      },
      right: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null,
        },
        right: {
          val: 1,
          left: null,
          right: null,
        },
      },
    },
  },
];
