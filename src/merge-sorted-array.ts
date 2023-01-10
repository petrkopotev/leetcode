/**
 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 representing the number of elements in nums1 and nums2 respectively.

 Merge nums1 and nums2 into a single array sorted in non-decreasing order.

 The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while(j >= 0) {
    if(i < 0 || nums2[j] > nums1[i]) {
      nums1[k] = nums2[j];
      k--; j--;
    } else {
      nums1[k] = nums1[i];
      k--; i--;
    }
  }

};

test("Merge Sorted Array", () => {
  let array1 = [4, 5, 6, 0, 0, 0];
  merge(array1, 3, [1, 3, 9], 3)
  expect(array1).toEqual([1, 3, 4, 5, 6, 9])

  let array2 = [1];
  merge(array2, 1, [], 0)
  expect(array2).toEqual([1])

  let array3 = [0];
  merge(array3, 0, [1], 1)
  expect(array3).toEqual([1])
})