/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  return levelOrder(root);
};


const levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const q = [];
  q.push(root);
  let startLeft = false;
  let row = [];
  let last = root;
  let nLast = root;
  let startRight = false;
  while (q.length !== 0) {
    const node = q.shift();
    row.push(node.val);
    if (node.left) {
      q.push(node.left);
      nLast = node.left;
    }
    if (node.right) {
      q.push(node.right);
      nLast = node.right;
    }
    if (last === node) {
      result.push(startRight ? row.reverse() : row);
      startRight = !startRight;
      last = nLast;
      row = [];
    }
  }
  return result;
}