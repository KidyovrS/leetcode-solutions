/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @param {number} num
 */
module.exports.fn = function deleteNode(node, num) {
  const orig = node;
  let n = node;
  while (n.next != null) {
    if (n.next.val === num) {
      n.next = n.next.next;
      return orig;
    }
    n = n.next;
  }
  return orig;
};

module.exports.testData = [
  {
    args: [
      {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 1,
            next: {
              val: 9,
              next: null,
            },
          },
        },
      },
      5,
    ],
    expected: {
      val: 4,
      next: {
        val: 1,
        next: {
          val: 9,
          next: null,
        },
      },
    },
  },
  {
    args: [
      {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 1,
            next: {
              val: 9,
              next: null,
            },
          },
        },
      },
      1,
    ],
    expected: {
      val: 4,
      next: {
        val: 5,
        next: {
          val: 9,
          next: null,
        },
      },
    },
  },
];
