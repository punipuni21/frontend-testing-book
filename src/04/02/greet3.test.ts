import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
  sayGoodBye: (name: string) => `Goodbye, ${name}.`,
}));

test("return greeting message(mock)", () => {
  expect(greet).toBeUndefined();
});

test("return goodbye message(mock)", () => {
  const message = `${sayGoodBye("Taro")} See you`;
  expect(message).toBe("Goodbye, Taro. See you");
});
