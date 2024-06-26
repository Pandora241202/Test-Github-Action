/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("Text -Hello From Heaven- in document", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByText("Hello From Heaven")).toBeInTheDocument();
});