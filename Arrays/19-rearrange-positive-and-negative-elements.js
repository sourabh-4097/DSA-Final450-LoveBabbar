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




var rearrangeElements = function (arr) {

    // Brute - force solution ----------------------->
    // let negArr = []
    // let posArr = []
    // let finalArr = []
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]<0){
    //         negArr.push(arr[i])
    //     }else{
    //         posArr.push(arr[i])
    //     }
    // }

    // for(let i=0; i<arr.length; i++){
    //     if(negArr[i] !==undefined){
    //         finalArr.push(negArr[i])
    //     }
    //     if(posArr[i] !== undefined){
    //         finalArr.push(posArr[i])
    //     }
    // }
    // return finalArr

  
  
  
    // Optimised solution ----------------------->
    let i = 0
    let j = 0
    while(j<arr.length){
        if(arr[j]<0){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j++
        }else{
            j++
        }
    }
    console.log(i,j)
    return arr

  };
  
  console.log(rearrangeElements([-1, 2, 3, -4, -1, 4]));  
//   console.log(rearrangeElements([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]));  


  