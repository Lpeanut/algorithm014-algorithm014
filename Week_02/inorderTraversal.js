/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let traversPath = []
  var inorder = root => {
    if (root) {
      inorder(root.left)
      traversPath.push(root.val)
      inorder(root.right)
    }
  }
  inorder(root)
  return traversPath
};