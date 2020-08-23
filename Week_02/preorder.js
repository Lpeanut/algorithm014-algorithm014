/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let traversPath = []
  var loop = root => {
    if (!root) return
    traversPath.push(root.val)
    root.children && root.children.forEach(child => loop(child))
  }
  loop(root)
  return traversPath
};