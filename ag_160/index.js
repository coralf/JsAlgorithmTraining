/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  if (!p1 || !p2) return;
  while (p1 !== p2) {
    p1 = p1 == null ? l2 : p1.next;
    p2 = p2 == null ? l1 : p2.next;
  }
  return p1;
};


