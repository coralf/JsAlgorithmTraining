/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  if (!nums || nums.length < 3) return [];
  const result = [];
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len; i++) {//遍历排序后的数组
    if (nums[i] > 0) break;//如果当前元素>0肯定不符合
    if (i > 0 && nums[i] === nums[i - 1]) continue;//去重
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {//大了，往左走选小的
        right--;
      } else if (sum < 0) {//小了，往右走选大的
        left++;
      } else {//三数之和=0，继续找下一个三数之和
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;//左边去重
        while (left < right && nums[right] === nums[right - 1]) right--;//右边去重
        right--;
        left++;
      }
    }
  }
  return result;
};
// @lc code=end

