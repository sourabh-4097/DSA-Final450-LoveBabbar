// Unbounded knapsack -  You can have multiple occurences of same element
// Given rod length and value of respective lengths, maximize the profit

function maximizeRodCuttingProfit(arr, val, W, n) {
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
      if (arr[i - 1] <= j) {
        t[i][j] = Math.max(val[i - 1] + t[i][j - arr[i - 1]], t[i - 1][j]);
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  return t[n][W];
}

const value = [2, 6, 8, 8];
const lengthOfRod = 4; // W

const array = Array.from({ length: lengthOfRod }, (v, i) => i + 1);

console.log(maximizeRodCuttingProfit(array, value, lengthOfRod, array.length));
