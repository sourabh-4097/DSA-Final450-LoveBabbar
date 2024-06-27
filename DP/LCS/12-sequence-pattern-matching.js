// Given two strings, check if first string is present in second string as sequence

function sequencePatternMatching(x, y, n, m) {
  let t = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < m + 1; j++) {
      if (i == 0 || j == 0) {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (x[i - 1] == y[j - 1]) {
        t[i][j] = 1 + t[i - 1][j - 1];
      } else {
        t[i][j] = Math.max(t[i - 1][j], t[i][j - 1]);
      }
    }
  }

  return t[n][m] === n; // check if lcs is equal to string x
}

const x = ['a', 'x', 'y'];
const y = ['a', 'g', 'x', 'l', 'y', 'b'];
// const y = ['a', 'g', 'x', 'l', 'b']
const n = x.length;
const m = y.length;

console.log(sequencePatternMatching(x, y, n, m));


// If problem is modified to check if any one of the string is subsequence of another then --->

// just get smallest element from x and y and compare it with lcs length

// Output = min(n,m) === lcs
