// Problem link - https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

// Problem Description -
// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number)
// which has the maximum sum and return its sum.

// Examples :

// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which
// is a contiguous subarray.

// Input:
// N = 4
// Arr[] = {-1,-2,-3,-4}
// Output:
// -1
// Explanation:
// Max subarray sum is -1
// of element (-1)



const maxSubarraySum = (arr, N) => {
  let maxSum = arr[0];
  let currSum = 0;

  for (let i = 0; i < N; i++) {
    currSum = currSum + arr[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    if (currSum < 0) {
      currSum = 0;
    }
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 2, 3, -2, 5], 5));
