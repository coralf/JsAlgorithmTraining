/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const reverseList = function (head) {
  let root = head;
  let resersedRoot = null;
  while (root) {
    const last = resersedRoot;
    resersedRoot = new ListNode(root.val);
    last && (resersedRoot.next = last);
    root = root.next;
  }
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
reverseList(head);