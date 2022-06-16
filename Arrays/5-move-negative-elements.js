// Problem link - https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/

// Problem Description -
// An array contains both positive and negative numbers in random order.
// Rearrange the array elements so that all negative numbers appear before all positive numbers.

// Examples :
// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5


const moveNegativeElements = (arr) => {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
};



const moveNegativeElementsOptimized = (arr, N) => {
  let low = 0;
  let mid = 0;
  while (mid <= N - 1) {
    if (arr[mid] < 0) {
      let temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      low = low + 1;
      mid = mid + 1;
    } else {
      mid = mid+1
    }
  }
  return arr;
};

console.log(moveNegativeElementsOptimized([-1-1,3,4,-4,5,-5,8,-9,1,-77], 11))