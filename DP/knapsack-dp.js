// Base condition in recursive function becomes Initialization in Top Down DP

function knapsackDP(wt, val, W, n) {
  let t = Array.from({ length: n + 1 }, () => Array(W + 1).fill(-1));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < W + 1; j++) {
      if (i == 0 || j == 0) {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < W + 1; j++) {
      if (wt[i - 1] <= j) {
        t[i][j] = Math.max(val[i - 1] + t[i - 1][j - wt[i - 1]], t[i - 1][j]);
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  return t[n][W];
}

const wt = [2, 3, 4, 5, 6];
const val = [4, 5, 6, 7, 8];
const W = 5;

console.log(knapsackDP(wt, val, W, wt.length));
