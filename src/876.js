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
module.exports.fn = function middleNode(head) {
  let current = head;
  let middle = head;

  while (current.next != null) {
    current = current.next;
    middle = middle.next;
    if (current.next != null) {
      current = current.next;
    }
  }

  return middle;
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
    ],
    expected: {
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
                next: {
                  val: 6,
                  next: null,
                },
              },
            },
          },
        },
      },
    ],
    expected: {
      val: 4,
      next: {
        val: 5,
        next: {
          val: 6,
          next: null,
        },
      },
    },
  },
];
