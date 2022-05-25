import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header/ > );

  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});

let isHead = document.querySelector("head");
isHead.textContent = "hello from the Header!";
