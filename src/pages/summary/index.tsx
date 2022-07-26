import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormWizardContext } from "../../contexts/formWizardContext";

const Summary: React.FC = () => {
  const navigate = useNavigate();
  const { values } = useContext(FormWizardContext);

  const handleBuy = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/form");
  };

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-extrabold">Summary</h1>
      <h3 className="text-2xl font-extrabold mt-5">{values.name}</h3>
      <table className="table-auto border-collapse mt-5">
        <tbody>
          <tr>
            <td className="p-1">Name:</td>
            <td className="p-1">{values.name}</td>
          </tr>
          <tr>
            <td className="p-1">Age:</td>
            <td className="p-1">{values.age}</td>
          </tr>
          <tr>
            <td className="p-1">Where do you live:</td>
            <td className="p-1">{values.country}</td>
          </tr>
          <tr>
            <td className="p-1">Package:</td>
            <td className="p-1">{values.package}</td>
          </tr>
          <tr>
            <td className="p-1">Premium:</td>
            <td className="p-1">{values.premium}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex">
        <button className="mt-7 px-12 py-3 text-black rounded border font-medium border-black hover:scale-105" onClick={handleBack}>
          Back
        </button>
        <button
          className="mt-7 ml-4 px-12 py-3 bg-black rounded border font-medium text-white border-black hover:scale-105"
          onClick={handleBuy}
        >
          Buy
        </button>
      </div>
    </main>
  );
};

export default Summary;
