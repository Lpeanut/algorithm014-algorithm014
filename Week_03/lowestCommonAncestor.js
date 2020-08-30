/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(node, p, q) {
  // 处理当前层逻辑
  if(node === null || node === p || node === q) return node
  // 分治，分解成子问题
  let l = lowestCommonAncestor(node.left, p, q)
  let r = lowestCommonAncestor(node.right, p, q)
  // 处理子问题的集合
  if (l && r) return node // 若左右都有,便是父节点
  return l || r
};