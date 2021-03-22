/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  const len = digits.length;
  let carry = 0;
  for (let i = len - 1; i >= 0; i--) {
    const num = digits[i] + 1;
    if (carry !== 0) {
      digits[i] = num;
      carry = 0;
    }
    if (num < 10) {
      digits[i] = num;
      return digits;
    }
    digits[i] = 0;
    carry = 1;
  }
  if (carry != 0) return [1, ...digits];
  return digits;
};
// @lc code=end

