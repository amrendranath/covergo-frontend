import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COUNTRIES } from "../../constants/countries";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    country: "",
    package: "",
  });

  const handleNext = () => {
    navigate("/summary");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-extrabold">Tell us about yourself</h1>

      <form className="mt-5">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control" name="name" id="name" value="" placeholder="Enter your name.." />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input className="form-control" name="age" id="age" value="" placeholder="Enter your age.." />
        </div>
        <div className="form-group">
          <label htmlFor="country">Where do you live</label>
          <select className="form-control" name="country" id="country">
            {COUNTRIES.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
      </form>

      <div className="flex">
        <button className="mt-7 px-12 py-3 text-black rounded border font-medium border-black hover:scale-105" onClick={handleBack}>
          Back
        </button>
        <button
          className="mt-7 ml-4 px-12 py-3 bg-black rounded border font-medium text-white border-black hover:scale-105"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Form;
