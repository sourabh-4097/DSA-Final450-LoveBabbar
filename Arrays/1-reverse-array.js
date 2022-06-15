// Problem link - https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/

// Problem Description - 
// Given an array (or string), the task is to reverse the array/string.

// Examples : 
// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}


reverseWord = (str) =>{
    //Your code here
    
    let reverse = ''
    for(let i = 0; i < str.length; i++){
        reverse = reverse + str[str.length-1-i]
    }
    return reverse
}

console.log(reverseWord("pl"))              // output - lp