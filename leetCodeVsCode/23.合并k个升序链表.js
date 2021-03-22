/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  return merge(lists, 0, lists.length - 1);
};

const merge = (lists, l, r) => {
  if (l === r) {
    return lists[l];
  }
  if (l > r) {
    return null;
  }
  let mid = (l + r) >> 1;
  return mergeTwo(merge(lists, l, mid), merge(lists, mid + 1, r));
}

const mergeTwo = (a, b) => {
  if (!a || !b) {
    return a || b;
  }
  const head = new ListNode(0);
  let tail = head, at = a, bt = b;
  while (at && bt) {
    if (at.val < bt.val) {
      tail.next = at;
      at = at.next;
    } else {
      tail.next = bt;
      bt = bt.next;
    }
    tail = tail.next;
  }
  tail.next = at || bt;
  return head.next;
}


// @lc code=end

