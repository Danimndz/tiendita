import { render, screen } from "@testing-library/react";
import ListaProductos from "./ListaProductos";

test("renders lista productos", () => {
  render(<ListaProductos />);
  expect(screen.getByText("Name")).toBeVisible();
  expect(screen.getByText("Price")).toBeVisible();
  expect(screen.getByText("Quantity")).toBeVisible();
  expect(screen.getByText("Actions")).toBeVisible();
});
