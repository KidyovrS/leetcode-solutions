/* eslint-disable no-param-reassign */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function flattenRecursive(node) {
  if (node == null) {
    return;
  }

  flattenRecursive(node.left);
  flattenRecursive(node.right);

  if (node.left != null) {
    const tmp = node.right;
    node.right = node.left;

    // find the last node
    let last = node.right;
    if (last != null) {
      while (last.right != null) {
        last = last.right;
      }

      last.right = tmp;
    }
  }

  delete node.left;
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
module.exports.fn = function flatten(root) {
  flattenRecursive(root);
  return root; // just for testing
};

module.exports.testData = [
  {
    args: [
      {
        val: 1,
        left: {
          val: 2,
          left: {
            val: 3,
            left: null,
            right: null,
          },
          right: {
            val: 4,
            left: null,
            right: null,
          },
        },
        right: {
          val: 5,
          left: null,
          right: {
            val: 6,
            left: null,
            right: null,
          },
        },
      },
    ],
    expected: {
      val: 1,
      right: {
        val: 2,
        right: {
          val: 3,
          right: {
            val: 4,
            right: {
              val: 5,
              right: {
                val: 6,
                right: null,
              },
            },
          },
        },
      },
    },
  },
];
