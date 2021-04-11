import { render, screen } from "@testing-library/react";
import Main from "./Main";

test("renders main", () => {
  render(<Main />);
  expect(screen.getByTestId("shoppingbag")).toBeEnabled();
});
