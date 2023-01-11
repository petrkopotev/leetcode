/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 */
import * as trace_events from "trace_events";

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }

  if (p !== null && q === null || p === null && q !== null || p!.val !== q!.val)
    return false;

  let isSame = isSameTree(p!.left, q!.left)
  if (!isSame) return false;
  isSame = isSameTree(p!.right, q!.right)
  return isSame;
};

test("Same Tree", () => {
  expect(isSameTree(null, null)).toEqual(true)
  expect(isSameTree(new TreeNode(1, null, null), new TreeNode(1, null, null))).toEqual(true)
  expect(isSameTree(new TreeNode(1, null, null), new TreeNode(2, null, null))).toEqual(false)
  expect(isSameTree(new TreeNode(1, new TreeNode(10), null), new TreeNode(1, null, null))).toEqual(false)
  expect(isSameTree(new TreeNode(1, new TreeNode(10), null), new TreeNode(1, null, new TreeNode(10)))).toEqual(false)
  expect(isSameTree(new TreeNode(1, new TreeNode(10), null), new TreeNode(1, new TreeNode(10), new TreeNode(10)))).toEqual(false)
  expect(isSameTree(new TreeNode(1, new TreeNode(11), new TreeNode(12)), new TreeNode(1, new TreeNode(11), new TreeNode(12)))).toEqual(true)
})