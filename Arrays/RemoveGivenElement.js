// Remove given element from an array

function removeGivenElement(array, element) {
  let i = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[j] !== element) {
      array[i] = array[j];
      i++;
    }
  }
  return i;
}

let myArray1 = [3, 2, 2, 3];
let valueToBeRemoved1 = 2;
let result = removeGivenElement(myArray1, valueToBeRemoved1);
console.log(myArray1.slice(0, result));

// Time complexity :- O(n)
// Space complexity :- O(1)

// Another solution

function removeElement(array, element) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== element) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

let myArray2 = [3, 2, 2, 3, 2, 2, 4, 5, 3];
let valueToBeRemoved2 = 2;
console.log(removeElement(myArray2, valueToBeRemoved2));

// Time complexity :- O(n)
// Space complexity :- O(n)
