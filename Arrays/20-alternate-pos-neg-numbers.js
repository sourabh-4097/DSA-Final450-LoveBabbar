const solve = function (arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let j = i;

    if (i % 2 == 0) {
      while (j < n && arr[j] >= 0) {
        j += 1;
      }
    } else {
      while (j < n && arr[j] < 0) {
        j += 1;
      }
    }
    if (j < n) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  return arr;
};

let arrs = [
  [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8],
  [1, 2, 3, -4, -1, -4, -1],
  [1, 2, 2, 3, 3],
  [0, 0, 0, 0],
  [-1, -1, -2],
  [1, 2, 3, 3, 4, -5, -5, -9],
  [-1, -2, -3, 10],
];

for (let i = 0; i < arrs.length; i++) {
  console.log(solve(arrs[i]));
}

//pseudo code
// if its even position then check if ele is positive then increment pointer till it reached end or we get negative element
// if odd then check if its negative and increment pointer till we get positive ele or reach end of array
// once we get elements swap them
// if we already have right element then swapping will be done for same position as i and j are same
