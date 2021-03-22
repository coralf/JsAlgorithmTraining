/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const trap1 = function (height) {
  const len = height.length;
  let total = 0;
  for (let i = 1; i < len - 1; i++) {
    let maxL = 0, maxR = 0;
    for (let k = i; k >= 0; k--) {
      maxL = Math.max(maxL, height[k]);
    }
    for (let k = i; k < len; k++) {
      maxR = Math.max(maxR, height[k])
    }
    total += Math.min(maxL, maxR) - height[i];
  }
  return total;
};


/**
 * 
 * @param {number[]} height 
 */
const trap2 = (height) => {

  let maxL = [], maxR = [], total = 0, len = height.length;
  maxL[0] = height[0];

  for (let i = 1; i < len; i++) {
    maxL[i] = Math.max(maxL[i - 1] || 0, height[i]);
  }

  maxR[len - 1] = height[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    maxR[i] = Math.max(maxR[i + 1] || 0, height[i]);
  }

  for (let i = 1; i < len - 1; i++) {
    total += Math.min(maxL[i], maxR[i]) - height[i];
    console.log(maxL[i], maxR[i], height[i]);
  }
  return total;
}

const trap = (height) => {
  let total = 0, curr = 0, len = height.length;
  const stack = [];
  while (curr < len) {
    while (stack.length !== 0 && height[stack[stack.length - 1]] < height[curr]) {
      const top = stack.pop();
      if (stack.length === 0) {
        break;
      }
      const dis = curr - stack[stack.length - 1] - 1;
      const bHeight = Math.min(height[curr], height[stack[stack.length - 1]]) - height[top];
      total += dis * bHeight;
    }
    stack.push(curr++);
  }
  return total;
}



// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// @lc code=end

