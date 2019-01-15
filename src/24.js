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
module.exports.fn = function swapPairs(head) {
  if (head == null) {
    return null;
  }

  if (head.next == null) {
    return head;
  }

  let zero = {};
  let first = head;
  let second = head.next;
  const ret = second;
  let third = second.next;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    zero.next = second;
    first.next = third;
    second.next = first;

    zero = first;
    first = zero.next;
    second = first && first.next;
    third = second && second.next;

    if (first == null || second == null) {
      break;
    }
  }

  return ret;
};

module.exports.testData = [
  {
    args: [{ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } }],
    expected: { val: 2, next: { val: 1, next: { val: 4, next: { val: 3, next: null } } } },
  },
];
