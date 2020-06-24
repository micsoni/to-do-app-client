import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders hello", () => {
  const { getByText } = render(<App />);
  const hellolement = getByText("Hello");
  expect(hellolement).toBeInTheDocument();
});
