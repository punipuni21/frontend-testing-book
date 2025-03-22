import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

test("display name", () => {
  render(<Form name="John Doe" />);
  console.log(screen.getByText("John Doe"));
});
