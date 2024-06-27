function longestrepeatingSubsequence(s,n) {
    let x = s
    let y = s
    let m = n
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
          if(x[i-1] == y[j-1] && i != j){
              t[i][j] = 1 + t[i-1][j-1]
          } else {
              t[i][j] = Math.max(t[i][j-1], t[i-1][j])
          }
      }
    }
  
    return t[n][m]
  
  }
  
  
  let s = ['a', 'a', 'b', 'e', 'b', 'd', 'd', 'c'];
//   let s = ['a', 'b', 'e', 'b', 'd', 'a', 'b'];
  let n = s.length;
  
  console.log(longestrepeatingSubsequence(s, n)); // abd 025 -- abd 146