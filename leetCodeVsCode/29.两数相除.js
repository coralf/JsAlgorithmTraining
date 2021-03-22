/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {

  const MAX_INT = 2147483648;
  if (dividend === -MAX_INT && divisor === -1) return MAX_INT - 1;
  let flag = dividend ^ divisor;//取符号
  let ded = dividend < 0 ? dividend : -dividend;//
  let dor = divisor < 0 ? divisor : -divisor;

  //sum累加和，t能够被除的次数
  let sum = 0, t = 0;
  let sums = 0, ts = 0;
  let sumss = 0, tss = 0;
  let result = 0;

  while (ded <= dor) {

    sum += dor;
    t--;
    sums += sum;
    ts += t;
    sumss += sums;
    tss += ts;

    if (ded - sumss < 0 && sumss < 0) {
      result += tss;
      ded -= sumss;
    } else {
      result--;
      ded -= dor;

      sum = 0;
      t = 0
      sums = 0;
      ts = 0;
      sumss = 0;
      tss = 0;
    }
  }
  return flag < 0 ? result : -result;
};
// @lc code=end

