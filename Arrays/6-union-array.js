// Problem link - https://practice.geeksforgeeks.org/problems/union-of-two-arrays3538/1

// Problem Description -
// Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.

// Examples :
// Input:
// 1 2 3 4 5
// 1 2 3
// Output: 
// 5
// Explanation: 
// 1, 2, 3, 4 and 5 are the
// elements which comes in the union set
// of both arrays. So count is 5.


const doUnion = (a, b)=>{
    const union =  [...new Set(a.concat(b))]

        return union.length
    }

doUnion([1,2,3,4,5], [9,1,2,0])             // op - 8