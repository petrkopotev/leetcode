// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).


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

function isSymmetric(root: TreeNode | null): boolean {
  return function isSymmetric2(left: TreeNode | null, right: TreeNode| null): boolean {
    if(left === null && right === null) {
      return true;
    }

    if(left === null && right !== null || left !== null && right === null || left!.val != right!.val) {
      return false
    }

    let symmetric = isSymmetric2(left!.left, right!.right);
    if(!symmetric) return false;
    symmetric = isSymmetric2(left!.right, right!.left);

    return symmetric;
  }(root!.left, root!.right);
};


test("Symmetric tree", () => {
  expect(isSymmetric(new TreeNode(1, null, null))).toEqual(true);
  expect(isSymmetric(new TreeNode(1, new TreeNode(2), new TreeNode(2)))).toEqual(true);
  expect(isSymmetric(new TreeNode(1, new TreeNode(2), new TreeNode(3)))).toEqual(false);
  expect(isSymmetric(new TreeNode(1, new TreeNode(2, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3))))).toEqual(true);
})