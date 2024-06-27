// Minimum number of coins to get the sum

function coinChange2(coin, summ, n) {
  let t = Array.from({ length: n + 1 }, () => Array(summ + 1).fill(-1));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < summ + 1; j++) {
      if (j == 0) {
        t[i][j] = 0;
      }
      if (i == 0) {
        t[i][j] = Infinity - 1;
      }
      // this is only example where we have to initialize second row
      if (i == 1) {
        // if its dividable then only we can have number of coins, or else it will be Infinity
        if (j % coin[0] == 0) {
          t[i][j] = j / coin[0];
        } else {
          t[i][j] = Infinity - 1;
        }
      }
    }
  }

  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < summ + 1; j++) {
      if (coin[i - 1] <= j) {
        // +1 because we are including that coin
        t[i][j] = Math.min(1 + t[i][j - coin[i - 1]], t[i - 1][j]);
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  return t[n][summ];
}

const coin = [2, 2, 3];
let summ = 8;

console.log(coinChange2(coin, summ, coin.length));
