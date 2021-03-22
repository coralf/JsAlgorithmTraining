/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const differ = target - nums[i];
    if (map.has(differ)) {
      return [map.get(differ), i];
    }
    map.set(nums[i], i);
  }
};
// @lc code=end

