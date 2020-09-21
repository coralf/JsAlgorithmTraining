


/**
* @param {number[]} nums
* @return {number}
*/
const majorityElement = function (nums) {
  const len = nums.length;
  const mid = parseInt(len / 2);
  const dict = new Map();
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    const val = dict.get(num)
    dict.set(num, val ? (val + 1) : 1);
  }

  for (let [num, count] of dict) {
    if (count > mid) {
      return num;
    }
  }
};

