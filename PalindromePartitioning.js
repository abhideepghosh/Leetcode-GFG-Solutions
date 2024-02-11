/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const dp = Array.from({ length: s.length }, () => Array(s.length).fill(false));
    for(let gap = 0; gap<s.length; gap++) {
        for(let i=0, j=gap; j<s.length; i++, j++) {
            if(gap === 0) dp[i][j] = true;
            else if(gap === 1) dp[i][j] = s[i] === s[j];
            else dp[i][j] = (s[i] === s[j] && dp[i + 1][j - 1]) ? true : false;
        }
    }
    const result = [];
    const backtrack = (i, path) => {
    if (i === s.length) {
      result.push([...path]); 
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (dp[i][j]) {
        path.push(s.substring(i, j + 1));
        backtrack(j + 1, path);
        path.pop(); 
      }
    }
  }
  backtrack(0, []);
  return result;
};
