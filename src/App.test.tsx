import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should render", () => {
    render(<App />);
    expect(screen.getByText(/Hi/i)).toBeDefined();
  });
});
