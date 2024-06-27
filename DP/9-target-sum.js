// add + or - signs to array elements such that their sum should be equal to given Target sum

// this reduces to forming two subsets and then their addition equals to Target sum

//  2S1 = Target sum + range

function targetSum(arr, targetSum, n) {
  let sumArr = arr.reduce((acc, currVal) => acc + currVal, 0);
  let targetPlusSumOfArr = sumArr + targetSum;

  if (targetPlusSumOfArr % 2 != 0) {
    return 0;
  }

  let summ = targetPlusSumOfArr / 2;

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

  return t[n][summ];
}

const arr = [1, 1, 2, 3];
const target = 1;

console.log(targetSum(arr, target, arr.length));
