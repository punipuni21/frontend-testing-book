import { render, screen } from "@testing-library/react";
import { Form } from "./Form";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("accessible name of a form quotes the heading", async () => {
  render(<Form />);
  expect(
    screen.getByRole("form", { name: "register new account" })
  ).toBeInTheDocument();
});

test("signup button is disabled", async () => {
  render(<Form />);
  expect(screen.getByRole("button", { name: "sign up" })).toBeDisabled();
});

test("when checkbox is checked, signup button is enabled", async () => {
  render(<Form />);
  await user.click(screen.getByRole("checkbox"));
  expect(screen.getByRole("button", { name: "sign up" })).toBeEnabled();
});
