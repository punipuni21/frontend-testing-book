import { render, screen } from "@testing-library/react";
import { ArticleListItem, ItemProps } from "./ArticleListItem";

const item: ItemProps = {
  id: "howto-testing-with-typescript",
  title: "TypeScript を使ったテストの書き方",
  body: "テストを書く時、TypeScript を使うことで、テストの保守性が向上します…",
};

test("display link", () => {
  render(<ArticleListItem {...item} />);
  expect(screen.getByRole("link", { name: "see more" })).toHaveAttribute(
    "href",
    "/articles/howto-testing-with-typescript"
  );
});
