/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let xySet = new Set()
  obstacles.forEach(item => {
    xySet.add(`${item[0]},${item[1]}`)
  })
  let axisSet = new Set(), d = 0, curAxis = [0, 0]
  // 0 y+
  // 1 x+
  // 2 y-
  // 3 x-
  for (let v of commands) {
    if (v < 0) {
      v === -1 && d++
      v === -2 && d--
      continue
    }
    for( let i = 0; i < v; i++) {
      let newAxis = caclAxis(curAxis, d)
      let [x, y] = newAxis
      if (xySet.has(`${x},${y}`)) {
        break
      }
      curAxis = newAxis
    }
    axisSet.add(curAxis)
  }
  let max = 0
  for(let item of axisSet) {
    const [x, y] = item
    max = Math.max(max, x * x + y * y)
  }
  return max 
}

function caclAxis (axis, d) {
  if (d < 0) {
    d = (d % 4) + 4
  }
  d = d % 4
  let [x, y] = axis
  if (d === 0) return [x, ++y]
  if (d === 1) return [++x, y]
  if (d === 2) return [x, --y]
  if (d === 3) return [--x, y]
}