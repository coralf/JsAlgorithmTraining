/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome1 = function (s) {
  if (s.length <= 2) return s[0];

  let longestStr = '';
  for (let i = 0; i < s.length; i++) {
    let f = s[i];
    for (let k = i + 1; k < s.length; k++) {
      f += s[k];
      if (f.split('').reverse().join('') === f && f.length > longestStr.length) {
        longestStr = f;
      }
    }
    f = '';
  }
  return longestStr;
};

/**
 * 
 * @param {string} s 
 */
const longestPalindrome = (s) => {
  const len = s.length;
  let longest = '';
  const dp = [];
  for (let l = 0; l < len; l++) {
    for (let i = 0; i + l < len; i++) {
      dp[i] = dp[i] || [];
      const j = i + l;
      if (l === 0) {
        dp[i][j] = true;
      } else if (l === 1) {
        dp[i][j] = (s[i] === s[j]);
      } else {
        dp[i][j] = ((s[i] === s[j]) && dp[i + 1][j - 1]);
      }
      if (dp[i][j] && l + 1 > longest.length) {
        longest = s.substring(i, i + l + 1);
      }
    }
  }
  return longest;
}


console.log(longestPalindrome('babad'));

// @lc code=end

