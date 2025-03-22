import { render, screen, within } from "@testing-library/react";
import { ArticleList } from "./ArticleList";
import { items } from "./fixture";

test("display items", () => {
  render(<ArticleList items={items} />);
  expect(screen.getAllByRole("listitem")).toHaveLength(3);
});

test("display lists", () => {
  render(<ArticleList items={items} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

test("display list using within", () => {
  render(<ArticleList items={items} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
  expect(within(list).getAllByRole("listitem")).toHaveLength(3);
});

test("when lists are empty, display no articles", () => {
  render(<ArticleList items={[]} />);
  const list = screen.queryByRole("list");
  expect(list).toBeNull();
  expect(screen.getByText("no articles")).toBeInTheDocument();
});
