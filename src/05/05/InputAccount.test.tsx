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
