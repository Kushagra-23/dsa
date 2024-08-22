// Find maximum and minimum from an array

function findMaxMin(array) {
  let max = array[0];
  let min = array[0];
  for(let i = 0; i < array.length; i++) {
    if(array[i] > max) {
      max = array[i];
    } else if(array[i] < min) {
      min = array[i];
    }
  }
  return [
    max,
    min
  ]
};

let myArray = [3, 2, 4, 1];
console.log(findMaxMin(myArray));

// Time complexity :- O(n)
// Space complexity :- O(1)