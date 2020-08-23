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
var preorderTraversal = function(root) {
  let traversPath = []
  var preorder = root => {
    if (root) {
      traversPath.push(root.val)
      preorder(root.left)
      preorder(root.right)
    }
  }
  preorder(root)
  return traversPath
};