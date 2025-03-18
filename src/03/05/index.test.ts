import { add } from "./";
test("when argments are not between 0 and 100, it throws an error", () => {
  expect(() => add(110, -10)).toThrow("input value must be between 0 and 100");
});
