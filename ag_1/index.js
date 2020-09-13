
/**
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//v1
const twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

//v2
const twoSum2 = function (nums, target) {
  const objNums = {};
  for (let i = 0; i < nums.length; i++) {
    objNums[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    const valIdx = objNums[val];
    if (valIdx && valIdx !== i) {
      return [i, valIdx];
    }
  }
};

//v3
const twoSum3 = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const valIdx = map.get(target - nums[i])
    if (valIdx != null && valIdx !== i) {
      return [valIdx, i];
    }
    map.set(nums[i], i);
  }
};



//v4
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i];
    const idx = nums.findIndex((item, index) => item === val && index !== i);
    if (idx !== -1) {
      return [i, idx];
    }
  }
};


const result = twoSum([3, 2, 4], 6);
console.log(result);



