import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Welcome from "../index";

describe("<Welcome />", () => {
  it("show welcome message", () => {
    render(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    );
    expect(screen.getByText("hello there!")).toBeInTheDocument();
    expect(screen.getByText("Let's buy some insurance. It is going to take only a few steps.")).toBeInTheDocument();
  });
});
