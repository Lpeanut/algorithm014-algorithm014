var removeDuplicates = function(nums) {
  let head = 0, v = null
  for( let i = 0; i<nums.length; i++) {
    if (nums[i] !== v) {
      nums[head++] = nums[i]
      v = nums[i]
    }
  }
  return head
};