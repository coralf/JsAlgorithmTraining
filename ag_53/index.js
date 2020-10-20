/**
 * 分治
 * @param {number[]} nums
 * @return {number}
 */
const calculateSubArr = (nums, begin, end) => {
  if (end - begin < 2) {
    return nums[begin];
  };
  const mid = Math.floor((end + begin) >> 1);
  let leftMidValue = nums[mid - 1];
  let maxLeftMidValue = leftMidValue;
  for (let i = mid - 2; i >= begin; i--) {
    leftMidValue += nums[i];
    maxLeftMidValue = Math.max(maxLeftMidValue, leftMidValue);
  }
  let rightMidValue = nums[mid]
  let maxRightMidValue = rightMidValue;
  for (let i = mid + 1; i < end; i++) {
    rightMidValue += nums[i];
    maxRightMidValue = Math.max(maxRightMidValue, rightMidValue);
  }
  return Math.max(maxLeftMidValue + maxRightMidValue, Math.max(calculateSubArr(nums, begin, mid), calculateSubArr(nums, mid, end)));
}

const maxSubArray = function (nums) {
  if (!nums || nums.length < 1) return 0;
  return calculateSubArr(nums, 0, nums.length);
};

console.log('maxSubArray :>> ', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));