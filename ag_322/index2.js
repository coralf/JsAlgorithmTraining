

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (n, faces) {
  if (n < 1) return 0;
  const dp = [];
  for (let i = 1; i <= n; i++) {
    let min = dp[i - 1] || 0;
    if (i >= 5) min = Math.min(min, dp[i - 5] || 0);
    if (i >= 20) min = Math.min(min, dp[i - 20] || 0);
    if (i >= 25) min = Math.min(min, dp[i - 25] || 0);
    dp[i] = min + 1;
  }
  return dp[n];
};



console.log('coinChange(41,[]) :>> ', coinChange(41, [1, 5, 20, 25]));