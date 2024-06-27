function printLcs(x, y, n, m) {
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
  console.log(t);

  let i = n;
  let j = m;
  let res = '';
  while (i > 0 && j > 0) {
    if (x[i - 1] == y[j - 1]) {
      res += x[i - 1];
      i -= 1;
      j -= 1;
    } else {
      if (t[i][j - 1] > t[i - 1][j]) {
        j -= 1;
      } else {
        i -= 1;
      }
    }
  }

  return res.split('').reverse().join('')
}

let x = ['a', 'b', 'c', 'g', 'h'];
let y = ['a', 'b', 'c', 'h','g', 'f', 'h'];
let n = x.length;
let m = y.length;

console.log(printLcs(x, y, n, m));
