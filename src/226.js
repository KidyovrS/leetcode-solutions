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
module.exports = function invertTree(root) {
  if (root == null) {
    return root;
  }
  const t = root.left;
  root.left = invertTree(root.right); // eslint-disable-line no-param-reassign
  root.right = invertTree(t); // eslint-disable-line no-param-reassign
  return root;
};
