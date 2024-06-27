// Problem link - https://practice.geeksforgeeks.org/problems/common-elements1132/1#

// Problem Description -
// Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.

// Examples :
// Input:
// n1 = 6; A = {1, 5, 10, 20, 40, 80}
// n2 = 5; B = {6, 7, 20, 80, 100}
// n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
// Output: 20 80
// Explanation: 20 and 80 are the only
// common elements in A, B and C.






// Pseudo-code / EXPLAINATION ------------------>

// declare three vars i,j,k
// have a while look which ends when any od the i,j,k runs out of respecting lengths of arrays
// whichever arr[i,j,k] is smaller, update it and continue loop
// when all arr[i,j,k] are equal, push that element to array and finally return SET of that array to avoid duplicates




var commonElements = function (arr1, arr2, arr3, n1, n2, n3) {

  // Brute - force solution ----------------------->
  //   let singleFilteredArray = arr1.filter((value) => arr2.includes(value));    // this is intersection of two arrays
  //   let doublrFilteredArray = singleFilteredArray.filter((value) =>
  //     arr3.includes(value),
  //   );
  //   const set = new Set(doublrFilteredArray);
  //   return [...set];



  // Optimised solution ----------------------->
  let i = 0;
  let j = 0;
  let k = 0;
  let common = [];

  while (i < n1 && j < n2 && k < n3) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      common.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }
  const set = new Set(common);
  return [...set];
};

console.log(commonElements([3, 3, 3], [3, 3, 3], [3, 3, 3], 3, 3, 3));  // [3]
