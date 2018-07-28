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
module.exports = function maxDepth(root) {
  return root == null
    ? 0
    : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
