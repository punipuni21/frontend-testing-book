import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./Form";

// @babel/preset-typescript: TypeScriptからJavaScriptへ変換
// @babel/preset-react: BabelにJSX→JSへ変換してもらう
// @babel/preset-env : ESModules→CommonJSの変換

test("display name", () => {
  render(<Form name="taro" />);
  expect(screen.getByText("taro")).toBeInTheDocument();
});

test("display button", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("display heading", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("heading")).toHaveTextContent("account info");
});

test("when push button, then event handler is called", () => {
  const mockFn = jest.fn();
  render(<Form name="taro" onSubmit={mockFn} />);
  fireEvent.click(screen.getByRole("button"));
  expect(mockFn).toHaveBeenCalled();
});
