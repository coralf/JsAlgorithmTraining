/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {

  if (nums.length === 0) return [-1, -1];
  if (nums.length === 1) return target === nums[0] ? [0, 0] : [-1, -1];
  const n = nums.length;
  let left = 0, right = n - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {//二分法选中的mid不一定是最开始的mid，所以要从中间往两边计算下标
      let start = end = mid;
      while (nums[mid] === nums[end]) end++;
      while (nums[mid] === nums[start]) start--;
      return [start + 1, end - 1];
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return [-1, -1];

};



// console.log('searchRange', searchRange([5, 7, 7, 8, 8, 10, 12, 15, 15, 60], 15))
// @lc code=end

