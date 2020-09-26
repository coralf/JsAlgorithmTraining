/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits1 = function (n) {
  let r = 0;
  let p = 31;
  while (n) {
    r += (n & 1) << p;
    n = n >> 1;
    p--;
  }
  return r;
};



const reverseBits = function (n) {
  return parseInt(n.toString(2).padStart(32, 0).split('').reverse().join(''), 2);
};

const res = reverseBits(00000010100101000001111010011100);
console.log("res", res)
