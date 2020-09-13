/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let c5 = 0, c10 = 0, c20 = 0
  for (let bill of bills) {
    let f1 = bill === 10 && c5 === 0
    let f2 = bill === 20 && c5 === 0
    let f3 = bill === 20 && c10 === 0 && c5 < 3
    if (f1 || f2 || f3) return false
    if (bill === 5) {
      c5++;
      continue
    } else if (bill === 10) {
      c5--
      c10++
      continue
    } else {
      if (c10 > 0) {
        c10--
        c5--
      } else {
        c5 -= 3
      }
    }
  }
  console.log(c5, c10)
  return c5 >= 0 && c10 >= 0
};