// Problem link - https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/

// Problem Description -
// Given two sorted arrays arr1[] of size N and arr2[] of size M. Each array is sorted in non-decreasing order.
//  Merge the two arrays into one sorted array in non-decreasing order without using any extra space.

// Examples :
// Input:
// N = 4, M = 5
// arr1[] = {1, 3, 5, 7}
// arr2[] = {0, 2, 6, 8, 9}
// Output: 0 1 2 3 5 6 7 8 9
// Explanation: Since you can't use any
// extra space, modify the given arrays
// to form
// arr1[] = {0, 1, 2, 3}
// arr2[] = {5, 6, 7, 8, 9}





const merge = (arr1, arr2, N, M) => {
  for (let i = 0; i < M; i++) {
    arr1.push(arr2[i]);
  }
  return arr1.sort(function (a, b) {
    return a - b;
  });
};

console.log(merge([1, 3, 5, 7], [0, 2, 6, 8, 9], 4, 5));
