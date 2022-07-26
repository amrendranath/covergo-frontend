import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Error from "../components/error";

describe("<Error />", () => {
  it("show welcome message", () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
    expect(screen.getByText("Ooops")).toBeInTheDocument();
    expect(screen.getByTestId("error_info")).toBeInTheDocument();
    expect(screen.getByText("Ok :(")).toBeInTheDocument();
  });
});
