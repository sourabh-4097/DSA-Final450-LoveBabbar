// Problem link - https://leetcode.com/problems/next-permutation/

// Problem Description -
// Given an array of integers nums, find the next permutation of nums.
// The replacement must be in place and use only constant extra memory.

// Examples :
// Input: nums = [1,2,3]
// Output: [1,3,2]

// Input: nums = [1,1,5]
// Output: [1,5,1]

// Input: nums = [3,2,1]
// Output: [1,2,3]




// Pseudo-code / EXPLAINATION
// start from backtracking, check where we get a[i]<a[i+1] ----- idx1
// starting from backtracking only, find number which is just greater than idx1 ---- idx2
// swap the elements at idx1 and idx2
// sort an array from idx+1 onwards ----- slice it from idx1 + 1 and sort it




var nextPermutation = function (nums) {
  const n = nums.length;
  if (n === 1) {
    return nums;
  }

  let idx1;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      idx1 = i;
      break;
    }
  }
  if (idx1 === undefined) {
    return nums.sort(function (a, b) {
      return a - b;
    });
  }

  let idx2;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > nums[idx1]) {
      idx2 = i;
      break;
    }
  }

  let temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;

  let final = [];

  for (let i = 0; i <= idx1; i++) {
    final.push(nums[i]);
  }

  let arr = nums.slice(idx1 + 1).sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    final.push(arr[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = final[i];
  }
  return nums;
};

console.log(nextPermutation([3, 2, 1]));
