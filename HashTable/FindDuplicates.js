// Write a javascript function that takes an array as a parameter and returns a new array containing all the numbers that appear more than once in the input array.

function findDuplicates(array){
  const numCounts = {};
  const duplicates = [];
  for(let element of array){
    numCounts[element] = (numCounts[element] || 0) + 1;
  }
  for(let key in numCounts){
    if(numCounts[key] > 1){
      duplicates.push(Number(key));
    }
  }
  return duplicates;
};

let myString = [1,2,3,3,4,5,3,4,5];
console.log(findDuplicates(myString));

// Time complexity :- O(n)
// Space complexity :- O(n)