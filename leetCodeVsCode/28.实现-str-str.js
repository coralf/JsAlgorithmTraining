/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {

  let len = haystack.length, nLen = needle.length;
  for (let i = 0; i < len - nLen + 1; i++) {
    if (haystack.substring(i, i + nLen) === needle) {
      return i;
    }
  }
  return -1;
};

// @lc code=end

