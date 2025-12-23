import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/tired of boring lorem ipsum/i);
  expect(linkElement).toBeInTheDocument();
});
