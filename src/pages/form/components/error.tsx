import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormWizardContext } from "../../../contexts/formWizardContext";

const Error: React.FC = () => {
  const navigate = useNavigate();
  const { initialState, setValues } = useContext(FormWizardContext);

  const handleBtnClick = () => {
    navigate("/");
    setValues(initialState);
  };

  return (
    <>
      <h1 className="text-4xl font-extrabold">Ooops</h1>
      <p className="mt-5 text-center">
        Your age is over our ccepted limit. <br />
        We are sorry but we cannot insure you now.
      </p>
      <button
        className="mt-7 ml-4 px-12 py-3 bg-black rounded border font-medium text-white border-black hover:scale-105"
        onClick={handleBtnClick}
      >
        Ok :(
      </button>
    </>
  );
};

export default Error;
