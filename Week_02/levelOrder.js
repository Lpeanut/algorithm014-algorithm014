/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let traversPath = [] // 二维数组
  var loop = (root, level) => {
    if (!root) return
    if (!traversPath[level]) {
      traversPath[level]= []
    }
    traversPath[level].push(root.val)
    level += 1
    root.children && root.children.forEach(child => loop(child, level))
  }
  loop(root, 0)
  return traversPath
};