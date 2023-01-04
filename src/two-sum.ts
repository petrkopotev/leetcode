function twoSum(nums: number[], target: number): number[] {
  const m = new Map();

  for(let i = 0; i < nums.length; ++i) {
    const difference = target - nums[i];

    if (m.has(difference)) {
      return [m.get(difference), i]
    }

    m.set(nums[i], i);
  }

  return [];
};


test("Two Sum", () => {
  expect(twoSum([2, 2, 3], 5)).toEqual([1, 2]);
  expect(twoSum([2,7,11,15], 9)).toEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});