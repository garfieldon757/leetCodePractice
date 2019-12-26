// 时间O(N) 空间O(1)
function findAddTotalK(nums, k) {
  let count = 0;
  let sum = 0;
  let isPos = k > 0;

  for(let i=0; i<nums.length; i++) {
    for (let j=i; j<nums.length; j++) {
      sum += nums[j];
      if(sum === k) {
        count++;
        continue;
      }
    }
    sum = 0;
  }
  return count;
}

// 时间O(N) 空间O(N)
function findAddTotalK2(nums, k) {
  let count = 0;

  let preSum = 0;
  let preSumObject = {0: 1};
  for(let i=0 ;i <nums.length; i++) {
    preSum += nums[i];
    count += preSumObject[preSum-k] || 0;
    
    // k:前缀和 v:index
    if (!preSumObject[preSum]) preSumObject[preSum] = 1;
    else preSumObject[preSum] = preSumObject[preSum] + 1;
    
  } 
  return count;
}


const nums = [1,1,1]
const k = 2;
console.log(findAddTotalK2(nums, k));