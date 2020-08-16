/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hashSet = {}
  for(let i = 0; i< nums.length;i++) {
    const d = target - nums[i]
    if (d in hashSet) {
      return [hashSet[d], i]
    }
    hashSet[nums[i]] = i
  }
};