/* eslint-disable no-param-reassign */

function recursive(node, n, index) {
  if (node == null) {
    return index;
  }

  const count = recursive(node.next, n, index + 1);
  if (index + n + 1 === count) {
    node.next = node.next.next;
  }

  return count;
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
 * @param {number} n
 * @return {ListNode}
 */
module.exports.fn = function removeNthFromEnd(head, n) {
  if (head.next == null) {
    return null;
  }

  const count = recursive(head, n, 0);

  return count === n ? head.next : head;
};

module.exports.testData = [
  {
    args: [
      {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 5,
                next: null,
              },
            },
          },
        },
      },
      2,
    ],
    expected: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
  },
  {
    args: [
      {
        val: 1,
        next: null,
      },
      1,
    ],
    expected: null,
  },
  {
    args: [
      {
        val: 1,
        next: {
          val: 2,
          next: null,
        },
      },
      2,
    ],
    expected: {
      val: 2,
      next: null,
    },
  },
];
