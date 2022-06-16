// Problem link - https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1

// Problem Description -
// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// Examples :
// Input:
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2

// Explanation:
// 0s 1s and 2s are segregated into ascending order




// Brut-force approach
const sort012 = (arr, N) => {
  let c0 = 0;
  let c1 = 0;
  let c2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      c0 = c0 + 1;
    }
    if (arr[i] === 1) {
      c1 = c1 + 1;
    }
    if (arr[i] === 0) {
      c2 = c2 + 1;
    }
  }
  for (let i = 0; i < c0; i++) {
    arr[i] = 0;
  }

  for (let i = c0; i < c0 + c1; i++) {
    arr[i] = 1;
  }
  for (let i = c0 + c1 + 1; i < c0 + c1 + c2; i++) {
    arr[i] = 2;
  }

  return arr;
};






// optimized solution ------->
const sort012Optimized = (arr, N) => {
  let low = 0;
  let mid = 0;
  let high = N - 1;
  while (mid <= high) {
    if (arr[mid] === 1) {
      mid = mid + 1;
    } else if (arr[mid] === 0) {
      let temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      low = low + 1;
      mid = mid + 1;
    } else if (arr[mid] === 2) {
      let temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;

      high = high - 1;
    }
  }
  return arr;
};

sort012Optimized([1, 2, 0], 3);
