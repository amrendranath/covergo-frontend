import React, { createContext, useState } from "react";
import { IFormWizardContextProps, IContextInitialValues } from "./types";

export const FormWizardContext = createContext({} as IContextInitialValues);

const FormWizardProvider: React.FC<IFormWizardContextProps> = ({ children }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: 0,
    country: "",
    currency: "",
    package: "",
    premium: "",
    isError: false,
  });

  return <FormWizardContext.Provider value={{ values: formValues, setValues: setFormValues }}>{children}</FormWizardContext.Provider>;
};

export default FormWizardProvider;
