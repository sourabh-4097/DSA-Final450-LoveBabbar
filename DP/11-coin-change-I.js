// Maximum number of ways a sum can be achieved

function coinChange1(coin, summ, n) {
  let t = Array.from({ length: n + 1 }, () => Array(summ + 1).fill(-1));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < summ + 1; j++) {
      if (i == 0) {
        t[i][j] = 0;
      }
      if (j == 0) {
        t[i][j] = 1;
      }
    }
  }

  console.log(t)
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < summ + 1; j++) {
      if (coin[i - 1] <= j) {
        t[i][j] = t[i][j - coin[i - 1]] + t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  console.log('afterrrrrrrrrrrrrr')
  console.log(t)
  return t[n][summ]

}

const coin = [1,2,3]
let summ = 5

console.log(coinChange1(coin, summ, coin.length))