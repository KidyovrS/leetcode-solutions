/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
module.exports.fn = function mergeTrees(t1, t2) {
  if (t1 == null) {
    return t2;
  }
  if (t2 == null) {
    return t1;
  }
  const t = new TreeNode(t1.val + t2.val);
  t.left = mergeTrees(t1.left, t2.left);
  t.right = mergeTrees(t1.right, t2.right);
  return t;
};

module.exports.testData = [
  {
    args: [
      {
        val: 1,
        left: {
          val: 3,
          left: {
            val: 5,
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          val: 2,
          left: null,
          right: null,
        },
      },
      {
        val: 2,
        left: {
          val: 1,
          left: null,
          right: {
            val: 4,
            left: null,
            right: null,
          },
        },
        right: {
          val: 3,
          left: null,
          right: {
            val: 7,
            left: null,
            right: null,
          },
        },
      },
    ],
    expected: {
      val: 3,
      left: {
        val: 4,
        left: {
          val: 5,
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
          val: 7,
          left: null,
          right: null,
        },
      },
    },
  },
];
