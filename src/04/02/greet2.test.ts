import { greet } from "./greet";

jest.mock("./greet");

test("return greeting message(mock)", () => {
  expect(greet("Taro")).toBe(undefined);
});
