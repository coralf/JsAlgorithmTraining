
//1,5,20,25
const coins = (n, dp) => {
  if (n < 1) return Number.MAX_VALUE;
  if (dp[n] == null) {
    let min1 = Math.min(coins(n - 25, dp), coins(n - 20, dp));
    let min2 = Math.min(coins(n - 5, dp), coins(n - 1, dp));
    dp[n] = Math.min(min1, min2) + 1;
  }
  return dp[n];
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (n, faces) {
  const dp = [];
  for (const face of faces) {
    if (n < face) break;//如果当前n小于这个面值说明无法兑换就break;
    dp[face] = 1;
  }
  return coins(n, dp);
};


console.log('coinChange(41,[]) :>> ', coinChange(41, [1, 5, 20, 25]));
