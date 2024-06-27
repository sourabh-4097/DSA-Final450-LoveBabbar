// Problem statement - Check if array can be broken into two parts such that sum of both arrays will be same
// Logic is if number is odd then cant be divided into equal sum
// if even then find divide by 2 and you get subset sum problem

function equlSumPartition(arr, n) {
  const total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  if (total % 2 !== 0) {
    return false;
  }
  let summ = total / 2;

  let t = Array.from({ length: n + 1 }, () => Array(summ + 1).fill(-1));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < summ + 1; j++) {
      if (i == 0) {
        t[i][j] = false;
      }
      if (j == 0) {
        t[i][j] = true;
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < summ + 1; j++) {
      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  return t[n][summ];
}

const arr = [4, 3, 2, 5, 6];


console.log(equlSumPartition(arr, arr.length));
