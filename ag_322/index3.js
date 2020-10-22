/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (faces, n) {
  if (n < 1) return 0;
  const dp = [];
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < faces.length; j++) {
      const face = faces[j];
      if (i < face) continue;
      if (dp[i - face] < 0 || dp[i - face] >= min) continue;
      min = dp[i - face] || 0;
    }
    if (min === Number.MAX_VALUE) {
      dp[i] = -1;
    } else {
      dp[i] = min + 1;
    }
  }
  return dp[n];
};

console.log('coinChange(zz,[]) :>> ', coinChange(0, [1]));