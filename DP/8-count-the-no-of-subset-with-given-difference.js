// s1 - s2 = diff
// s1 + s2 = range
// --------------------
// 2s1 = diff + range

// s1 = (diff+range)/2

// count of subset sum for s1

function countSubSetWithGivenDiff(arr, n, diff) {
  let sumArr = arr.reduce((acc, currVal) => acc + currVal, 0);
  let target = diff + sumArr;

  if (target % 2 !== 0) {
    return 0;
  }

  let summ = target / 2;

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

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < summ + 1; j++) {
      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] + t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  return t[n][summ]
}

const arr = [1, 1, 2, 3];
const difference = 1;

console.log(countSubSetWithGivenDiff(arr, arr.length, difference));
