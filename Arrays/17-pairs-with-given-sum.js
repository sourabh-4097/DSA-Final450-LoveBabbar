// Problem link - https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1

// Problem Description -
// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.


// Examples :
// Input:
// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
// Output: 2
// Explanation:
// arr[0] + arr[1] = 1 + 5 = 6
// and arr[1] + arr[3] = 5 + 1 = 6.


// Input:
// N = 4, K = 2
// arr[] = {1, 1, 1, 1}
// Output: 6
// Explanation:
// Each 1 will produce sum 2 with any 1.



// Pseudo-code / EXPLAINATION
// Think of this problem in terms of map
// iterate over array and look for b = sum - a ----> if found in map then increase ans by frequency of b
// if arr[i] is not present then include in map and if present then increase frequence by one




var getPairsCount = function (arr, k) {
  // Brute-force solution --------------------->

  // let count = 0
  //   for(let i=0; i<n-1; i++){
  //       for(let j = i+1; j<n; j++){
  //           if (arr[i]+arr[j] == k){
  //               count = count + 1
  //           }
  //       }
  //   }




  // Optimized solution ------------------>

  let n = arr.length;
  var map = new Map();
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let val = k - arr[i];
    if (map.get(val)) {
      ans += map.get(val);
    }
    map.get(arr[i]) ? map.set(arr[i], map.get(arr[i]) + 1) : map.set(arr[i], 1);
  }
  return ans;
};

console.log(getPairsCount([1, 5, 7, 1], 6));    // 2
