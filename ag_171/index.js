/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function (s) {
  const dict = new Map();
  for (let i = 65; i < 91; i++) {
    dict.set(String.fromCharCode(i), i - 64);
  }
  let total = 0
  for (let i = s.length - 1; i >= 0; i--) {
    const curr = s[i];
    total += dict.get(curr) * Math.pow(26, s.length - 1 - i);
  }
  return total;
};

const num = titleToNumber("FXSHRXWWWWWW");
console.log("num", num)