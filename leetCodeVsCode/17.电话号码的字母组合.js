/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  const map = new Map();
  map.set('2', 'abc');
  map.set('3', 'def');
  map.set('4', 'ghi');
  map.set('5', 'jkl');
  map.set('6', 'mno');
  map.set('7', 'pqrs');
  map.set('8', 'tuv');
  map.set('9', 'wxyz');
  const len = digits.length;
  const composed = [];
  const dfs = (currStr, index) => {
    if (index > len - 1) {
      composed.push(currStr);
      return;
    } else {
      const dStr = map.get(digits[index]);
      for (let str of dStr) {
        dfs(currStr + str, index + 1);
      }
    }
  }
  dfs('', 0);
  return composed;
};



console.log(letterCombinations('23'));
// @lc code=end

