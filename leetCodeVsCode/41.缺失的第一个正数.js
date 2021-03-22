/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  const swap = (arr, idx1, idx2) => {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }


  let n = nums.length;
  for (let i = 0; i < n; i++) {
    //nums[nums[i]-1]!==nums[i] 如果这个数自己的下标位置不对应
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      swap(nums, nums[i] - 1, i);
    }
  }

  //现在数组中数字与下标已经对应的数组，如果存在下标不对应的
  //那么最小正整数就是第一个不匹配的下标+1
  for (let i = 0; i < n; i++) {
    if (nums[i] - 1 !== i) {
      return i + 1;
    }
  }
  //没有找到说明就是数组长度+1
  return n + 1;
};

// @lc code=end

