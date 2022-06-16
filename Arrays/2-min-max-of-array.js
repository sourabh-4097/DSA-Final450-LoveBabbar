// Problem link - https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

// Problem Description -
// Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

// Examples :
// Input:
// N = 6
// A[] = {3, 2, 1, 56, 10000, 167}
// Output:
// min = 1, max =  10000

const getMinMax = (arr, n) => {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
};

console.log(getMinMax([1,44,55,65656,768],5))