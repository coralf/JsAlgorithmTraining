/**
 * @param {number} n
 * @return {string}
 */
const countAndSay1 = function (n) {
  if (n === 1) return '1';
  let pre = countAndSay(n - 1);
  let result = '';
  let left = 0;
  let right = 0;
  while (right < pre.length) {
    while (pre[left] === pre[right] && right < pre.length) right++;
    result += (right - left).toString() + pre[left];
    left = right;
  }
  return result;
};
var countAndSay = function (n) {
  let pre = "1", cur = "1";
  for (let i = 1; i < n; i++) {
    pre = cur;
    cur = "";
    let left = 0, right = 0;
    while (right < pre.length) {
      while (pre[left] === pre[right] && right < pre.length) {
        right++;
      };
      cur += (right - left).toString() + pre[left];
      left = right;
    }
    console.log('cur,i :>> ', cur,i);
  }
  return cur;
};

const res = countAndSay(10);