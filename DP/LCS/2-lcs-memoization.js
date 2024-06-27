// find longest common subsequence of two strings using memoization

let i = 0
function lcsMemoization(x, y, n, m) {
    console.log('called', i);
    i+= 1
  if (n == 0 || m == 0) {
    return 0;
  }

  // comment out this code and see how many calls are reduced or increased bcoz of this
  if(t[n][m] !== -1){
    return t[n][m]
  }
  if (x[n - 1] == y[m - 1]) {
    t[n][m] =  1 + lcsMemoization(x, y, n - 1, m - 1);
    return t[n][m]
  } else {
    t[n][m] = Math.max(
      lcsMemoization(x, y, n, m - 1),
      lcsMemoization(x, y, n - 1, m),
    );
    return t[n][m]
  }
}

let x = ['a', 'b', 'c', 'h'];
let y = ['a', 'c', 'g', 'f'];
let n = x.length;
let m = y.length;

let t = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));

console.log(lcsMemoization(x, y, n, m));

