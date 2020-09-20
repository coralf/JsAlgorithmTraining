/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  let count = 0;
  for (let i = 31; i >= 0; i--) {
    ((n & (1 << i)) !== 0) && count++;
  }
  return count;
};

const count = hammingWeight(00000000000000000000000000001011);
console.log("count", count)