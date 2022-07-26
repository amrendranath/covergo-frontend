import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PolicyForm from "../components/form";
import { FormWizardContext } from "../../../contexts/formWizardContext";
import { IFormWizardContextState } from "../../../contexts/formWizardContext/types";
import { RATE } from "../../../constants/countryCurrency";

const mockValue: IFormWizardContextState = {
  name: "Amrendra",
  age: 50,
  country: "Hong Kong",
  currency: "HKD",
  package: "Safe",
  premium: "750",
  isError: false,
};

const calculatePremium = (age: number, rate: number, packageName: string): number => {
  const standardPrice = 10 * age * rate;
  if (packageName === "Safe") {
    return standardPrice + standardPrice * 0.5;
  } else if (packageName === "Super Safe") {
    return standardPrice + standardPrice * 0.75;
  }
  return standardPrice;
};

describe("<PolicyForm />", () => {
  it("should show the form wrapper with <PolicyForm /> component.", () => {
    render(
      <FormWizardContext.Provider value={{ initialState: mockValue, values: mockValue, setValues: jest.fn }}>
        <MemoryRouter>
          <PolicyForm />
        </MemoryRouter>
      </FormWizardContext.Provider>
    );
    expect(screen.getByText("Tell us about yourself")).toBeInTheDocument();
    expect(calculatePremium(mockValue.age, RATE[mockValue.country], mockValue.package)).toBe(+mockValue.premium);
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });
});
