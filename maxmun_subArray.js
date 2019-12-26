// 时间O(N) 空间O(N)

function findMaxSubArray(nums) {
  let dpArr = [];
  dpArr[0] = nums[0];
  let totalMax = nums[0];
  for(i=1; i<nums.length; i++) {
    dpArr[i] = Math.max(dpArr[i-1]+nums[i], nums[i]);
    if(totalMax<dpArr[i]) {
      totalMax = dpArr[i];
    }
  }
  return totalMax;
};


const nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(findMaxSubArray(nums));