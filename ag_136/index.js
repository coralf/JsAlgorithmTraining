/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current !== nums[i - 1] && current !== nums[i + 1]) {
      return current;
    }
  }
};
const nums = singleNumber([4, 1, 2, 1, 2]);


