/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
// const largestRectangleArea1 = function (heights) {
//   let maxHeight = 0, len = heights.length;
//   for (let i = 0; i < len; i++) {
//     let minHeight = Number.MAX_VALUE;
//     for (let j = i; j < len; j++) {
//       minHeight = Math.min(minHeight, heights[j]);
//       maxHeight = Math.max(maxHeight, minHeight * (j - i + 1));
//     }
//   }
//   return maxHeight;
// };
// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = (height) => {
  let maxHeight = 0, stack = [], len = height.length, iHeight = [];
  for (let i = 0; i < len; i++) {
    iHeight[i + 1] = height[i];
  }
  iHeight[0] = 0;
  iHeight[len + 1] = 0;
  stack.push(0);
  len += 2;
  for (let i = 1; i < len; i++) {
    while (iHeight[i] < iHeight[stack[stack.length - 1]]) {
      let topIdx = stack.pop();
      maxHeight = Math.max(maxHeight, (i - stack[stack.length - 1] - 1) * (iHeight[topIdx]));
    }
    stack.push(i);
  }
  return maxHeight;
}
console.log('res=>', largestRectangleArea([2, 1, 5, 6, 2, 3]));
// @lc code=end

