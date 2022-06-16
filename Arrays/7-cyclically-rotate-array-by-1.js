// Problem link - https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0

// Problem Description -
// Given an array, rotate the array by one position in clock-wise direction.

// Examples :
// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4



const rotate = (arr, n) => {
  arr.unshift(arr[n - 1]);
  arr.pop();
  return arr;
};

rotate([1, 2, 3, 4, 5], 5); // op - [5,1,2,3,4]
