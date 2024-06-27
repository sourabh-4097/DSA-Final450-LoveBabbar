function minimumInsertionAndDeletion(x, y, n, m) {
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
        t[i][j] = Math.max(t[i][j - 1], t[i - 1][j]);
      }
    }
  }

  let insertion = m - t[n][m];
  let deletion = n - t[n][m];

  return { insertions: insertion, deletions: deletion };
}

let x = ['h', 'e', 'a', 'p'];
let y = ['p', 'e', 'a'];
let n = x.length;
let m = y.length;

console.log(minimumInsertionAndDeletion(x, y, n, m));
