import { expect } from "@jest/globals";

function addBinary(a: string, b: string): string {
  let carry: number = 0;
  let sum: number = 0;
  let i: number = a.length - 1;
  let j: number = b.length - 1;

  let res: string = "";
  while( i >=0 || j >= 0) {
    sum = Number(a[i--] || 0) + Number(b[j--] || 0) + carry;
    carry = sum > 1 ? 1 : 0;
    res = sum % 2 + res;
  }

  if(carry) res = carry + res;

  return res;
};

test("Add Binary", () => {
  expect(addBinary("11", "1")).toEqual("100")
  expect(addBinary("1010", "1011")).toEqual("10101")
})