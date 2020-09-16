


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const insert = (nums, left, right) => {
  if (left > right) return null;
  const mid = parseInt((left + right + 1) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = insert(nums, left, mid - 1);
  root.right = insert(nums, mid + 1, right);
  return root;
}

const sortedArrayToBST = function (nums) {
  return insert(nums, 0, nums.length - 1);
};

const root = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log("root", root)


