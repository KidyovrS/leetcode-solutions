/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
module.exports.fn = function addTwoNumbers(l1, l2) {
  let n1 = l1;
  let n2 = l2;
  const ret = {};
  let cur = ret;
  let plusOne = false;
  const mockNode = { val: 0, next: null };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    cur.val = n1.val + n2.val;

    if (plusOne === true) {
      cur.val += 1;
    }

    if (cur.val >= 10) {
      plusOne = true;
      cur.val -= 10;
    } else {
      plusOne = false;
    }

    if (n1.next == null && n2.next == null && plusOne === false) {
      break;
    }

    n1 = n1.next != null ? n1.next : mockNode;
    n2 = n2.next != null ? n2.next : mockNode;

    cur.next = { next: null };
    cur = cur.next;
  }

  return ret;
};

module.exports.testData = [
  {
    args: [
      { val: 2, next: { val: 4, next: { val: 3, next: null } } },
      { val: 5, next: { val: 6, next: { val: 4, next: null } } },
    ],
    expected: { val: 7, next: { val: 0, next: { val: 8, next: null } } },
  },
  {
    args: [
      { val: 2, next: { val: 4, next: null } },
      { val: 5, next: { val: 6, next: { val: 4, next: null } } },
    ],
    expected: { val: 7, next: { val: 0, next: { val: 5, next: null } } },
  },
];
