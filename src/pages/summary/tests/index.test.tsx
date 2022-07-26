import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Summary from "../index";
import FormWizardProvider from "../../../contexts/formWizardContext";

describe("<Summary />", () => {
  it("should show the summay of policy.", () => {
    render(
      <FormWizardProvider>
        <MemoryRouter>
          <Summary />
        </MemoryRouter>
      </FormWizardProvider>
    );
    expect(screen.getByText("Summary")).toBeInTheDocument();
    expect(screen.getByTestId("summary_table")).toBeInTheDocument();
    expect(screen.getByText("Buy")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });
});
