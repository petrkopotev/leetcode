/*
  You are climbing a staircase. It takes n steps to reach the top.
  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */
function climbStairs(n: number): number {
  if (n <= 2) {
    return n
  }

  let a = 1;
  let b = 2;
  for(let i = 3; i <= n; ++i) {
    let t = a;
    a = b;
    b += t;
  }

  return b;
};

test("Climbing Stairs", () => {
  expect(climbStairs(2)).toEqual(2);
  expect(climbStairs(3)).toEqual(3);
  expect(climbStairs(5)).toEqual(8);
})