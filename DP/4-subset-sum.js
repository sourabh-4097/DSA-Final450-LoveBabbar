
function subsetSum(arr,summ,n){
    let t = Array.from({length: n+1}, ()=> Array(summ+1).fill(-1))

    for(let i=0; i<n+1; i++){
        for(let j=0; j<summ+1; j++){
            if(i == 0){
                t[i][j] = false
            }
            if(j == 0) {
                t[i][j] = true
            }
        }
    }

    for(let i=1; i<n+1; i++){
        for(let j = 1; j< summ+1; j++){
            if(arr[i-1] <= j){
                t[i][j] = t[i-1][j - arr[i-1]] || t[i-1][j]
            } else{
                t[i][j] = t[i-1][j]
            }
        }
    }

    console.log(t)
    return t[n][summ]
}

const arr = [2, 3, 4, 5, 6];
const summ = 8;

console.log(subsetSum(arr,summ, arr.length));

// tell if subset sum is possible