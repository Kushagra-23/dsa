function twoSum(nums, target) {
  let result = [];
  for(let i = 0; i <= nums.length - 1; i++){
      for(let j = i + 1; j <= nums.length - 1; j++){
          if(nums[i] + nums[j] === target){
              result.push(i, j)
          }
      }
  }
  return result
};

console.log("result", twoSum([2,7,11,15], 9))
console.log("result", twoSum([3,2,4], 6))
console.log("result", twoSum([3,3], 6))
console.log("result", twoSum([3,2,3], 6))