import { add, RangeError, sub } from "./";

describe("四則演算", () => {
  describe("add", () => {
    test("when argments are not between 0 and 100, it throws an error", () => {
      expect(() => add(110, -10)).toThrow(
        "input value must be between 0 and 100"
      );
    });
  });

  describe("sub", () => {
    test("when argments are not between 0 and 100, it throws an error", () => {
      expect(() => add(110, -10)).toThrow(RangeError);
    });
  });
});
