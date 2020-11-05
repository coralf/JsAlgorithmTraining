/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  if (!nums || nums.length === 0) return 0
  const dp = [];
  dp[0] = 1;
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;//默认最长上升子序列只有1;
    for (let j = 0; j < i; j++) {
      if (nums[i] <= nums[j]) continue;
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    max = Math.max(dp[i], max);
  }
  return max;
};



lengthOfLIS([]);
console.log('lengthOfLIS([]) :>> ', lengthOfLIS([10, 2, 2, 5, 1, 7, 101, 18]));