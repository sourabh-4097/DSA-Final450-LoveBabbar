// Given an array of integers. Find if there is a subarray (of size at-least one) with 0 sum. 
// You just need to return true/false depending upon whether there is a subarray present with 0-sum or not. 
// Printing will be taken care by the driver code.

// Input:
// n = 5
// arr = {4,2,-3,1,6}
// Output: 
// Yes
// Explanation: 
// 2, -3, 1 is the subarray with sum 0.

//psudo code

// check if there is element with o
// check if sum is getting zero
// put summ into map and over the iteration if summ repeats then it means somewhere in the middle a subarray counts to zero


function subArrayWithGivenSumExists(arr, targetSum) {
    n = arr.length
    let summ = 0
    let map = new Map()
    for(let i=0; i<n; i++) {
        summ += arr[i]
        if (summ == targetSum){
            return true
        }
        if (map.get(summ-targetSum)) {
            return true
        }
        map.set(summ, 1)

    }
    return false
}

let arr = [4, 2, -3, 1, 8]
target_sum = 8
console.log(subArrayWithGivenSumExists(arr, target_sum))