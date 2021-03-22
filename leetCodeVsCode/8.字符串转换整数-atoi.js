/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */



// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const start = 'start', signed = 'signed', in_number = 'in_number', end = 'end';
const map = new Map([
  [start, [start, signed, in_number, end]],
  [signed, [end, end, in_number, end]],
  [in_number, [end, end, in_number, end]],
  [end, [end, end, end, end]]
]);
const myAtoi = function (str) {
  let total = 0;
  let sign = 1;
  let state = start;
  let len = str.length;
  for (let i = 0; i < len; i++) {
    const s = str[i];
    state = getState(state, s);
    if (state === in_number) {
      total = (total * 10 + (s - 0)) || 0;
      total = sign === 1 ? Math.min(total, Math.pow(2, 31) - 1) : Math.min(total, -Math.pow(-2, 31));
    } else if (state === signed) {
      sign = s === '-' ? -1 : 1;
    }
  }
  return sign * total;
};
/**
 * 
 * @param {string}currState
 * @param {string} s 
 */
const getState = (currState, s) => {
  const states = map.get(currState);
  if (s === ' ') {
    idx = 0;
  } else if (s === '+' || s === '-') {
    idx = 1
  } else if (typeof parseInt(s) === 'number' && !isNaN(s)) {
    idx = 2
  } else {
    idx = 3;
  }
  return states[idx];
}

console.log(myAtoi('-91283472332'));
// @lc code=end

