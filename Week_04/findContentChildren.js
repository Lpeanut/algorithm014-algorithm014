/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let n = 0
  let fn = (a, b) => b - a
  g = g.sort(fn);
  s = s = s.sort(fn)
  let i = j = 0
  for(;i < s.length; i++) {
    while(j < g.length) {
      // console.log(s[i], g[j])
      if (s[i] >= g[j]) {
        n++
        j++
        break
      }
      j++
    }
  }
  return n
};