

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let resultNodeList = null;
  let currResultNodeList = null;
  while (l1 || l2) {
    const a = l1 && l1.val || 0;
    const b = l2 && l2.val || 0;
    const result = a + b + carry;
    carry = parseInt(result / 10);//取十位
    if (resultNodeList === null) {
      resultNodeList = new ListNode(result % 10);
      currResultNodeList = resultNodeList;
    } else {
      currResultNodeList.next = new ListNode(result % 10);//取个位
      currResultNodeList = currResultNodeList.next;
    }
    if (carry > 0) {
      currResultNodeList.next = new ListNode(carry);//只要大于9就一定要进位；
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return resultNodeList;
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addNode(root, node) {
  let curr = root;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = node;
}

const root = new ListNode(5);
// addNode(root, new ListNode(4))
// addNode(root, new ListNode(3))

const root2 = new ListNode(5);
// addNode(root2, new ListNode(6))
// addNode(root2, new ListNode(4))

const result = addTwoNumbers(root, root2);

console.log('result :>> ', result);