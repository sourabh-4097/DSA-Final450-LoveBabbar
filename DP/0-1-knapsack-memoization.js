const mat = Array.from({ length: 6 }, () => Array(6).fill(-1));
let i = 0;

function knapsackRecursive(wt, val, W, n) {
  if (n == 0 || W == 0) {
    return 0;
  }


  if (mat[n][W] !== -1) {
    return mat[n][W];
  }

  if (wt[n - 1] <= W) {
    mat[n][W] = Math.max(
      val[n - 1] + knapsackRecursive(wt, val, W - wt[n - 1], n - 1),
      knapsackRecursive(wt, val, W, n - 1),
    );
    return mat[n][W];
  } else {
    mat[n][W] = knapsackRecursive(wt, val, W, n - 1);
    return mat[n][W];
  }
}

const wt = [2, 3, 4, 5, 6];
const val = [4, 5, 6, 7, 8];
const W = 5;

console.log(knapsackRecursive(wt, val, W, wt.length));
console.log(mat)
