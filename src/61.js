/* eslint-disable func-names */

function getLength(head) {
  let i = 0;
  let node = head;
  while (node != null) {
    i += 1;
    node = node.next;
  }
  return i;
}

function getNode(head, index) {
  let i = index;
  let node = head;
  while (i > 0) {
    node = node.next;
    i -= 1;
  }
  return node;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
module.exports.fn = function rotateRight(head, k) {
  if (head == null) return null;

  const len = getLength(head);

  // eslint-disable-next-line no-underscore-dangle
  const k_ = k % len;
  getNode(head, len - 1).next = head;
  const ret = getNode(head, len - k_);
  getNode(head, len - 1 - k_).next = null;

  return ret;
};

module.exports.testData = [
  {
    args: [{
      val: 0,
      next: {
        val: 1,
        next: {
          val: 2,
          next: null,
        },
      },
    }, 4],
    expected: {
      val: 2,
      next: {
        val: 0,
        next: {
          val: 1,
          next: null,
        },
      },
    },
  },
];
