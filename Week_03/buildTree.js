/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null
  var rootVal = preorder[0]
  var leftInorder = inorder.slice(0, inorder.indexOf(rootVal))
  var rightInorder = inorder.slice(inorder.indexOf(rootVal) + 1)
  var root = new TreeNode(rootVal)
  root.left = buildTree(preorder.slice(1, leftInorder.length + 1), leftInorder)
  root.right = buildTree(preorder.slice(leftInorder.length + 1) , rightInorder)
  return root
};
