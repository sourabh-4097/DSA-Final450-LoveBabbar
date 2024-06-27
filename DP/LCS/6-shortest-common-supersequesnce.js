function scs(x, y, n, m) {
    let t = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));
  
  
    for (let i = 0; i < n + 1; i++) {
      for (let j = 0; j < m + 1; j++) {
        if (i == 0 || j == 0) {
          t[i][j] = 0;
        }
      }
    }
  
    for(let i=1; i<n+1; i++){
      for(let j=1; j<m+1; j++){
          if(x[i-1] == y[j-1]){
              t[i][j] = 1 + t[i-1][j-1]
          } else {
              t[i][j] = Math.max(t[i][j-1], t[i-1][j])
          }
      }
    }
  
    return n + m - t[n][m]
  
  }
  
  
  let x = ['a', 'g', 'g', 't', 'a', 'b'];
  let y = ['g', 'x', 't', 'x', 'a', 'y', 'b'];
  let n = x.length;
  let m = y.length;
  
  console.log(scs(x, y, n, m));