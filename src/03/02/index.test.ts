import { add, sub } from "./";

describe("四則演算", () => {
  describe("add", () => {
    test("add: 1 + 1 = 2", () => {
      expect(add(1, 1)).toBe(2);
    });
    test("add: 1 + 2 = 3", () => {
      expect(add(1, 2)).toBe(3);
    });
  });

  describe("sub", () => {
    test("sub: 1 - 1 = 0", () => {
      expect(sub(1, 1)).toBe(0);
    });
    test("add: 2 + 1 = 1", () => {
      expect(sub(2, 1)).toBe(1);
    });
  });
});
