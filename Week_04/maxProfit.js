/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0, k = 0
  while(k < prices.length - 1) {
    let p = prices[k + 1] - prices[k]
    p > 0 && (profit += p)
    k++
  }
  return profit
};