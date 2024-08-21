// Find zero triplets in an array

function findZeroTriplets(array) {
  let found = false;
  for(let i = 0; i < array.length - 2; i++) {
    for(let j = i + 1; j < array.length - 1; j++) {
      for(let k = j + 1; k < array.length; k++){
        if(array[i] + array[j] + array[k] === 0){
          console.log(array[i],array[j],array[k])
          found = true;
        }
      }
    }
  };
  if(!found){
    console.log("No zero triplets found")
  }
};

let myArray = [0, -1, 2, -3, 1]
console.log(findZeroTriplets(myArray))


// Time complexity :- O(n^3)
// Space complexity :- O(1)