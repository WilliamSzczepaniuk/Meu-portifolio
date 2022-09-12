import React from "react";
import { render, screen } from "@testing-library/react";
import { Qualifications } from "../../components/Contact";

describe("Qualifications component", () => {
  test("Should be able to render a Qualifications", () => {
    render(<Qualifications />);
  });
  const plataform = screen.getByText("Linkedin");
  expect(plataform).toBeInTheDocument();
});
