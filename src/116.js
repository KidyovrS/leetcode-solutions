/* eslint-disable no-param-reassign */

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

function connectRecursive(node) {
  if (node == null) {
    return;
  }

  if (node.left != null) {
    node.left.next = node.right;
    if (node.next != null) {
      node.right.next = node.next.left;
    }

    connectRecursive(node.left);
    connectRecursive(node.right);
  }
}

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
module.exports.fn = function connect(root) {
  if (root == null) {
    return root;
  }

  root.next = null;

  connectRecursive(root);

  return root; // just for testing
};

// result can not be serialized
module.exports.testData = [
  {
    args: [null],
    expected: null,
  },
];
