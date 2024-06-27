
let i = 0
function knapsackRecursive(wt, val, W, n){
    console.log('called...', i);
    i += 1;
    if(n == 0 || W == 0){
        return 0
    }


    if(wt[n-1] <= W){
        return Math.max(
            val[n-1] + knapsackRecursive(wt, val, W-wt[n-1], n-1),
            knapsackRecursive(wt,val,W,n-1)
        )
    } else {
        return knapsackRecursive(wt, val, W, n-1)

    }
}

const wt = [2,3,4,5,6]
const val = [4,5,6,7,8]
const W = 5

console.log(knapsackRecursive(wt, val, W, wt.length))


// Logic
// 1. Base condition
//  -- think of smallest valid inpput
// so wt array can be length of zero nd W can be zero so return 0 profit 

// 2. choice diagram
// if current wt is greater than W (iterating from end) then simply call on smaller input
// if current wt is less than W then we have two choices, either we can take it or not
// so we will take max of both