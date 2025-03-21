import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
  ...jest.requireActual("./greet"), // import all from greet.ts
  sayGoodBye: (name: string) => `Goodbye, ${name}.`, // we can only mock sayGoodBye
}));

test("return greeting message(mock)", () => {
  expect(greet("Taro")).toBe("Hello, Taro");
});

test("return goodbye message(mock)", () => {
  const message = `${sayGoodBye("Taro")} See you`;
  expect(message).toBe("Goodbye, Taro. See you");
});
