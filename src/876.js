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
module.exports = function middleNode(head) {
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
