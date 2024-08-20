// Find the longest string in a array of strings

function findLongestString(array) {
  let longestString = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }
  return longestString;
}

let myString = ["apple", "banana", "pineapple"];

console.log(findLongestString(myString));
