/* eslint-disable no-param-reassign */

function dfs(node, ret, depth) {
  if (node == null) return;

  ret[depth] = ret[depth] || [];
  ret[depth].push(node.val);

  dfs(node.left, ret, depth + 1);
  dfs(node.right, ret, depth + 1);
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
 * @return {number[][]}
 */
module.exports.fn = function levelOrder(root) {
  const ret = [];
  dfs(root, ret, 0);
  return ret;
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
    expected: [[3], [9, 20], [15, 7]],
  },
];
