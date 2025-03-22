import { render, screen } from "@testing-library/react";
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
