/**
 *
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 * Definition for singly-linked list.
 */

class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  let prev: ListNode = head;
  let cur: ListNode = head.next;

  while (cur != null) {
    if (prev.val === cur.val) {
      prev.next = cur.next;
      cur = cur.next!;
    } else {
      prev = cur;
      cur = cur.next!
    }
  }

  return head;
};

function createList(arr: Array<number>): ListNode | null {
  let prev: ListNode | null = null;
  let head: ListNode | null = null;
  for (const arrayElement of arr) {
    let n: ListNode = new ListNode(arrayElement);
    if (prev) {
      prev.next = n;
      prev = prev.next;
    } else {
      head = n;
      prev = n;
    }
  }

  return head;
}

function validateList(array: Array<Number>, head: ListNode | null) {
  if (head === null) {
    return;
  }

  for (const number of array) {
    expect(head.val).toEqual(number);
    head = head.next!;
  }
}


test("Remove Duplicates from Sorted List", () => {
  validateList([1, 2], deleteDuplicates(createList([1, 1, 2])));
  validateList([1, 2, 3], deleteDuplicates(createList([1, 1, 2, 3, 3])))
})