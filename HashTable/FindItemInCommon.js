// Write a javascript function that takes two arrays as parameters and returns a boolean value indicating whether there is at least one element common to both arrays.

function itemInCommon(array1, array2) {
  // for(let i = 0; i < array1.length; i++) {
  //   for(let j = 0; j < array2.length; j++) {
  //     if(array1[i] === array2[j]) {
  //       return true;
  //     }
  //   }
  // } Not efficient way Time complexity is O(n2) 

  const obj = {};
  for(let i=0; i<array1.length; i++) {
    obj[array1[i]] = true;
  }
  for(let j=0; j<array2.length; j++) {
    if(obj[array2[j]]) return true;
  }
  return false;
}

let array1 = [2,3,5];
let array2 = [1,4,6];
console.log(itemInCommon(array1, array2))

// Time complexity :- O(2n) => O(n)
// Space complexity :- O(n)