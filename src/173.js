/* eslint-disable func-names */

function pushAllLeftNodes(node, stack) {
  let n = node;
  while (n != null) {
    stack.push(n);
    n = n.left;
  }
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
 */
const BSTIterator = function (root) {
  this.stack = [];
  pushAllLeftNodes(root, this.stack);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const node = this.stack.pop();
  if (node.right != null) {
    pushAllLeftNodes(node.right, this.stack);
  }
  return node.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

module.exports.fn = function testBSTIterator(root) {
  const iterator = new BSTIterator(root);
  return [
    iterator.next(),
    iterator.next(),
    iterator.hasNext(),
    iterator.next(),
    iterator.hasNext(),
    iterator.next(),
    iterator.hasNext(),
    iterator.next(),
    iterator.hasNext(),
  ];
};

module.exports.testData = [
  {
    args: [
      {
        val: 7,
        left: {
          val: 3,
          left: null,
          right: null,
        },
        right: {
          val: 15,
          left: {
            val: 9,
            left: null,
            right: null,
          },
          right: {
            val: 20,
            left: null,
            right: null,
          },
        },
      },
    ],
    expected: [3, 7, true, 9, true, 15, true, 20, false],
  },
];
