/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let len = nums.length
  let d = len - k % len
  for (let i = 0; i < d; i++) {
    nums.push(nums[i])
  }
  nums.splice(0, d)
  return nums
};