function dfs(node, ret) {
  if (node == null) {
    return;
  }

  dfs(node.left, ret);
  ret.push(node.val);
  dfs(node.right, ret);
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
 * @return {boolean}
 */
module.exports.fn = function isValidBST(root) {
  if (root == null) return true;

  if (root.left == null && root.right == null) return true;

  const arr = [];
  dfs(root, arr);

  // check if arr is incremental
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] <= arr[i - 1]) return false;
  }

  return true;
};

module.exports.testData = [
  {
    args: [
      {
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
    ],
    expected: true,
  },
  {
    args: [
      {
        val: 5,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: {
            val: 3,
            left: null,
            right: null,
          },
          right: {
            val: 6,
            left: null,
            right: null,
          },
        },
      },
    ],
    expected: false,
  },
  {
    args: [
      {
        val: 1,
        left: {
          val: 1,
          left: null,
          right: null,
        },
        right: null,
      },
    ],
    expected: false,
  },
];
