function minimumSubsetSum(arr, n) {
  let summ = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

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

  const res = t[n];
  let minDiff = Infinity;

  for (let i = 0; i < res.length / 2; i++) {
    if (res[i]) {
      val = summ - 2 * i; // range- 2*s1
      if (val < minDiff) {
        minDiff = val;
      }
    }
  }

  return minDiff;
}

// const arr = [2, 7, 11];

// console.log(minimumSubsetSum(arr, arr.length));

// Minimize two subset sums basically s1 and s2
// s1 + s2 = range(sum of array)

// so we have to minimize   = s2 - s1
//  = range - s1 - s1
//  = range - 2(s1)
// and value of s1 will lie in last row of table till mid of the array

