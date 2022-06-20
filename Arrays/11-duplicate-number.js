// Problem link - https://leetcode.com/problems/find-the-duplicate-number/

// Problem Description -
// Given an array of integers nums where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.

// Examples :
//Input: nums = [1,3,4,2,2]
// Output: 2



const findDuplicate = (nums) => {

  //Brute-force solution --------------------->

  // let dup = []
  // for(let i=0; i<nums.length;i++){
  //     if(dup.includes(nums[i])){
  //         return nums[i]
  //     }else{
  //         dup.push(nums[i])
  //     }
  // }

  // Optimized solution ------------------>

  let zeros = [];
  for (let i = 0; i < nums.length; i++) {
    zeros.push(0);
  }
  for (let i = 0; i < nums.length; i++) {
    if (zeros[nums[i]] === 1) {
      return nums[i];
    } else {
      zeros[nums[i]] = 1;
    }
  }
};

console.log(findDuplicate([1, 2, 3, 3, 4]));
