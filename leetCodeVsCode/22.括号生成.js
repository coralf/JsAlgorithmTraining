/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {

  const composed = [];
  gen(composed, 0, 0, n);
  return composed;
};

const gen = (composed, lIdx, rIdx, n, curr = '') => {
  if (curr.length === n * 2) {
    composed.push(curr);
    return;
  } else {
    if (lIdx < n) {
      gen(composed, lIdx + 1, rIdx, n, curr + '(');
    }
    if (rIdx < lIdx) {
      gen(composed, lIdx, rIdx + 1, n, curr + ')');
    }
  }

}

// console.log(generateParenthesis(3));
// @lc code=end

