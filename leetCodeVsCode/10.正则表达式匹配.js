/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  //s的前i个字符是否与p的前j个字符相匹配
  let dp = [[true]], m = s.length, n = p.length;
  for (let i = 0; i <= m; i++) {
    (!dp[i]) && (dp[i] = []);//数组初始化，以免空指针
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2];//如果现在j-1遍历到*了。那么dp[i][j]的状态肯定与*前面那个状态一样，即[j-2];
        if (match(s, p, i, j - 1)) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];//本次为true或者上一个字符的j次匹配结果
        }
      } else {
        if (match(s, p, i, j)) {//如果匹配到的是字符就与上一次匹配的结果保持一致就行了
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }
  return dp[m][n] || false;
};

const match = (s, p, i, j) => {
  if (i === 0) {//如果现在s才读到第一个字符就匹配了*，则不合格
    return false;
  }
  if (p[j - 1] === '.') {//如果*号前面那个字符是.则匹配单个任意字符
    return true;
  }
  return s[i - 1] === p[j - 1];//如果两个字符相等匹配成功
}
// console.log(isMatch('aaa', 'a*'));
// @lc code=end

