/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const resultArr = [];
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let first = 0; first < len; first++) {
    if (first > 0 & nums[first - 1] === nums[first]) continue;
    let third = len - 1;
    let target = -nums[first];
    for (let second = first + 1; second < len; second++) {
      if (second > first + 1 && nums[second] === nums[second - 1]) continue;
      //second+third=-first，则满足条件first+second+third=0
      //由于数组是升序，如果second + third > -first，说明third大了，要将third指针往前移动一位，变小
      while (second < third && nums[second] + nums[third] > target) third--;
      if (second === third) break;
      //
      if (nums[second] + nums[third] === target) {
        resultArr.push([nums[first], nums[second], nums[third]]);
      }
    }
  }
  return resultArr;
};



