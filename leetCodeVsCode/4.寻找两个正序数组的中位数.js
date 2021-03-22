/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const allNums = [...nums1, ...nums2];
  allNums.sort((a, b) => a - b);
  const flag = allNums.length % 2 === 0;
  const mid = (Math.floor((allNums.length - 1) / 2));
  if (flag) {
    return (allNums[mid] + allNums[mid + 1]) / 2;
  } else {
    return allNums[mid];
  }
};
// @lc code=end

