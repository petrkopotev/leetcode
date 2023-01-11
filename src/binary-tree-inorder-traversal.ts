/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  let a: number[] = [];
  if(root === null) {
    return a;
  }

  a = a.concat(inorderTraversal(root.left))
  a.push(root.val);
  a = a.concat(inorderTraversal(root.right))

  return a;
};

let root: TreeNode = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null)));

test("Binary Tree Inorder Traversal", () => {
  expect(inorderTraversal(root)).toEqual([1,3,2]);
})