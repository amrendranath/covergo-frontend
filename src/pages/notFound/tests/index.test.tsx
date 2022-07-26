import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../index";

describe("<NotFound />", () => {
  it("show not found message", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found!")).toBeInTheDocument();
  });
});
