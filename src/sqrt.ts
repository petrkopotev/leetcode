import { expect } from "@jest/globals";

function mySqrt(x: number): number {
  let l: number = 1;
  let r: number = x;

  while(r >= l) {
    let mid = Math.floor((l + r) / 2);
    let multiply = mid * mid;
    if(multiply > x) {
      r = mid - 1;
    } else if(multiply < x) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return r;
};

test("Sqrt", () => {
  expect(mySqrt(6)).toEqual(2);
  expect(mySqrt(16)).toEqual(4)
  expect(mySqrt(9)).toEqual(3)
  expect(mySqrt(8)).toEqual(2)

})