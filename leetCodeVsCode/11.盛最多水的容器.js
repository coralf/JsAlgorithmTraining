/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea1 = function (height) {
  let maxHeight = 0, len = height.length;
  for (let i = 0; i < len; i++) {
    for (let k = i + 1; k < len; k++) {
      const front = height[i];
      const end = height[k];
      const dis = k - i;
      const capacity = Math.min(front, end) * dis;
      maxHeight = Math.max(maxHeight, capacity);
    }
  }
  return maxHeight;
};
const maxArea = function (height) {
  let maxHeight = 0, len = height.length;
  let start = 0, end = len - 1;
  while (start < end) {
    let num1 = height[start];
    let num2 = height[end];
    let dis = end - start;
    let currentCapacity = Math.min(num1, num2) * dis;
    if (currentCapacity > maxHeight) {
      maxHeight = currentCapacity;
    } else {
      if (num1 < num2) {
        start++;
      } else {
        end--;
      }
    }
  }
  return maxHeight;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// @lc code=end

