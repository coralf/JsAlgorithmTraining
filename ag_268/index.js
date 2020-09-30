/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => (nums.length * (nums.length + 1)) / 2 - nums.reduce((acc, curr) => acc + curr, 0);
console.log('missingNumber(1,2,3) :>> ', missingNumber([0, 1]));
