/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  if (nums.length === 0) return -1;
  if (nums.lengt === 1) return nums[0] === target ? 0 : -1;
  const len = nums.length;
  let lIdx = 0, rIdx = len - 1;
  while (lIdx <= rIdx) {
    const midIdx = Math.floor(lIdx + (rIdx - lIdx) / 2);
    if (nums[midIdx] === target) {
      return midIdx
    }
    if (nums[0] <= nums[midIdx]) {//如果一个有序数组砍掉一半，肯定有一半的有序的，所以比较一下头尾很直接判断出来
      if (nums[lIdx] <= target && nums[midIdx] > target) {//如果这个数target在左边，就把右边界移动到现在的mid（中间位置）
        rIdx = midIdx - 1;
      } else {//否则这个数肯定是在右边，就把左边边界移动到现在的中间
        lIdx = midIdx + 1;
      }
    } else {
      if (nums[midIdx] <= target && nums[len - 1] >= target) {//如果在无序的第二段，左边界移动到现在的中间
        lIdx = midIdx + 1;
      } else {//这种情况说明在无序的左边部分
        rIdx = midIdx - 1;
      }
    }
  }
  return -1;
};

// console.log('search([4,5,6,7,0,1,2])', search([4, 5, 6, 7, 0, 1, 2], 0))



// @lc code=end

