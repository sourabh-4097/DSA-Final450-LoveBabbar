// get shortest common super sequence and print it

function printScs(x, y, n, m) {
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

  let i = n;
  let j = m;
  let res = '';

  while (i > 0 && j > 0) {
    if (x[i - 1] == y[j - 1]) {
      res += x[i - 1];
      i -= 1;
      j -= 1;
    } else {
      if (t[i - 1][j] > t[i][j - 1]) {
        res += x[i - 1];
        i -= 1;
      } else {
        res += y[j - 1];
        j -= 1;
      }
    }
  }

  while (i > 0) {
    res += x[i - 1];
    i -= 1;
  }
  while (j > 0) {
    res += y[j - 1];
    j -= 1;
  }

  console.log(res);
  return res.split('').reverse().join('');
}

const x = ['a', 'b', 'c', 'd', 'a', 'f'];
const y = ['a', 'c', 'b', 'c', 'f'];
const n = x.length;
const m = y.length;

console.log(printScs(x, y, n, m));
