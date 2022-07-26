import React, { useContext } from "react";
import { FormWizardContext } from "../../contexts/formWizardContext/index";
import PolicyForm from "./components/form";
import Error from "./components/error";

const Form: React.FC = () => {
  const {
    values: { isError },
  } = useContext(FormWizardContext);

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-100">{isError ? <Error /> : <PolicyForm />}</main>
  );
};

export default Form;
