/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return '';
  return getLongestCommonPrefix(strs, 0, strs.length - 1);
};



/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 */
const getPrefix = (str1, str2) => {
  const minLen = Math.min(str1.length, str2.length);
  let idx = 0;
  while (idx < minLen && str1[idx] === str2[idx]) idx++;
  return str1.substring(0, idx);
}

const getLongestCommonPrefix = (strs, start, end) => {
  if (start === end) {
    return strs[start];
  } else {
    const mid = Math.floor(end - start / 2) + start;
    const left = getLongestCommonPrefix(strs, start, mid);
    const right = getLongestCommonPrefix(strs, mid + 1, end);
    return getPrefix(left, right);
  }

}


console.log(longestCommonPrefix(["flower", "flow", "flight", "flxxx", "fl12e12"]));



// @lc code=end

