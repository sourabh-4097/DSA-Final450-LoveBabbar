// Problem link - https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/

// Problem Description -
// Given an array of positive and negative numbers, arrange them in an alternate fashion such that every positive number is followed 
// by negative and vice-versa maintaining the order of appearance. 
// Number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array.
//  If there are more negative numbers, they too appear in the end of the array.

// Examples :
// Input:  arr[] = {1, 2, 3, -4, -1, 4}
// Output: arr[] = {-4, 1, -1, 2, 3, 4}

// Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
// output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}






// Pseudo-code / EXPLAINATION ------------------>

// declare three vars i,j,k
// have a while look which ends when any od the i,j,k runs out of respecting lengths of arrays
// whichever arr[i,j,k] is smaller, update it and continue loop
// when all arr[i,j,k] are equal, push that element to array and finally return SET of that array to avoid duplicates




var rough = function (arr) {

    let i = 0
    let j = arr.length - 1
    while(i<j){
        if(arr[i]<0){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
        if(arr[j]>0){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++

        }
        console.log(i,j)
        console.log(arr)
    }
    return arr

  };
  
//   console.log(rough([1, 2, 3, -4, -1, 4]));  
  console.log(rough([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]));  

  