// You will be given a string and then you have to find palindromic subsequence of that string

// string = abcbak ----> op- ababa

// Logic - reverse the string and find LCS of it

function minInsertionAndDeletionToMakeSTringPalindromic(string, n){
    let string1 = string
    let string2 = string1.split('').reverse().join('')
    let m = string2.length

    let t = Array.from({length: n+1}, ()=> Array(m+1).fill(-1))

    for(let i=0; i<n+1; i++){
        for(let j=0; j<m+1; j++){
            if(i ==0 || j ==0){
                t[i][j] = 0
            }
        }
    }

    for(let i=1; i<n+1; i++){
        for(let j=1; j<m+1; j++){
            if(string1[i-1] == string2[j-1]){
                t[i][j] = 1 + t[i-1][j-1]
            } else{
                t[i][j] = Math.max(t[i][j-1], t[i-1][j])
            }
        }
    }

    return n - t[n][m]

}




const string = 'hababa'

console.log(minInsertionAndDeletionToMakeSTringPalindromic(string, string.length))