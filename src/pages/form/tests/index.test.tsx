import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Form from "../index";
import { FormWizardContext } from "../../../contexts/formWizardContext";
import { IFormWizardContextState } from "../../../contexts/formWizardContext/types";

const mockValue: IFormWizardContextState = {
  name: "Amrendra",
  age: 50,
  country: "Hong Kong",
  currency: "HKD",
  package: "Safe",
  premium: "750",
  isError: false,
};

describe("<Form />", () => {
  it("should show the form wrapper with <PolicyForm /> component.", () => {
    render(
      <FormWizardContext.Provider value={{ initialState: mockValue, values: mockValue, setValues: jest.fn }}>
        <MemoryRouter>
          <Form />
        </MemoryRouter>
      </FormWizardContext.Provider>
    );
    expect(screen.getByText("Tell us about yourself")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("should show the form wrapper with <Error /> component.", () => {
    mockValue.isError = true;
    render(
      <FormWizardContext.Provider value={{ initialState: mockValue, values: mockValue, setValues: jest.fn }}>
        <MemoryRouter>
          <Form />
        </MemoryRouter>
      </FormWizardContext.Provider>
    );
    expect(screen.getByText("Ooops")).toBeInTheDocument();
    expect(screen.getByText("Ok :(")).toBeInTheDocument();
  });
});
