// Write a javascript function. twoSum that takes two parameters and returns an array containing the indices of two numbers in the array that sum to the target integer.

function twoSum(nums, target) {
  const numObject = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (numObject.hasOwnProperty(complement)) {
      return [numObject[complement], i];
    }
    numObject[num] = i;
  }
  return [];
}

console.log(twoSum([4, 5, 10], 9));

// Time complexity :- O(n)
// Space complexity :- O(n)