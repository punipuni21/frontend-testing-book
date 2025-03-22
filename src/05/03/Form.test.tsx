import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

test("display name", () => {
  render(<Form name="taro" />);
  screen.debug();
  expect(screen.getByText("taro")).toBeInTheDocument();
});

test("display button", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
