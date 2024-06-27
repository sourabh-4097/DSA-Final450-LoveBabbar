// find longest common subsequence of two strings

function lcsRecursive(x, y, n, m) {
    console.log('called')
  if (n == 0 || m == 0) {
    return 0;
  }

  if(x[n-1] == y[m-1]){
    return 1 + lcsRecursive(x,y,n-1,m-1)
  } else{
    return Math.max(
        lcsRecursive(x,y,n,m-1),
        lcsRecursive(x,y,n-1,m)
    )
  }
}

let x = ['a','b','c','g','h']
let y = ['a', 'c', 'g', 'f']
let n = x.length
let m = y.length

console.log(lcsRecursive(x,y,n,m))
