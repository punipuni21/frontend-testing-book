import { add, sub } from "./";

test("return value is sum of two arguments", () => {
  expect(add(50, 50)).toBe(100);
});
test("upper limit is 100", () => {
  expect(add(70, 80)).toBe(100);
});
test("sum is subtraction of two arguments", () => {
  expect(sub(51, 50)).toBe(1);
});
test("lower limit is 0", () => {
  expect(sub(50, 60)).toBe(0);
});
