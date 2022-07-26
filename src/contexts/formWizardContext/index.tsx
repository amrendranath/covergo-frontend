import React, { createContext, useState } from "react";
import { IFormWizardContextProps, IContextInitialValues } from "./types";

export const FormWizardContext = createContext({} as IContextInitialValues);

const FormWizardProvider: React.FC<IFormWizardContextProps> = ({ children }) => {
  const initialState = {
    name: "",
    age: 0,
    country: "",
    currency: "",
    package: "",
    premium: "",
    isError: false,
  };
  const [formValues, setFormValues] = useState(initialState);

  return (
    <FormWizardContext.Provider value={{ initialState, values: formValues, setValues: setFormValues }}>
      {children}
    </FormWizardContext.Provider>
  );
};

export default FormWizardProvider;
