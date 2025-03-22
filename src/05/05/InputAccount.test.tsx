import userEvent from "@testing-library/user-event";
import { InputAccount } from "./InputAccount";
import { render, screen } from "@testing-library/react";

const user = userEvent.setup();

test("mail address", async () => {
  render(<InputAccount />);
  const textbox = screen.getByRole("textbox", { name: "mail address" });
  const value = "taro.tanaka@example.com";
  await user.type(textbox, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test("password input area", async () => {
  render(<InputAccount />);
  expect(() => screen.getByRole("textbox", { name: "password" })).toThrow(); // <input type="password"> does not have a role attribute
  expect(() =>
    screen.getByPlaceholderText("input more than 8 characters")
  ).not.toThrow();
});

test("password input area", async () => {
  render(<InputAccount />);
  const password = screen.getByPlaceholderText("input more than 8 characters"); // <input type="password"> does not have a role attribute
  const value = "abcdefghi";
  await user.type(password, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});
