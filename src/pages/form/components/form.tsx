import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { COUNTRIES } from "../../../constants/countries";
import { FormWizardContext } from "../../../contexts/formWizardContext";

const PolicyForm: React.FC = () => {
  const navigate = useNavigate();
  const { values, setValues } = useContext(FormWizardContext);

  const handleNext = () => {
    navigate("/summary");
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    console.log(name, value);
  };

  const handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    console.log(name, value);
  };

  return (
    <>
      <h1 className="text-4xl font-extrabold">Tell us about yourself</h1>
      <form className="mt-5">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value=""
            placeholder="Enter your name.."
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            className="form-control"
            type="text"
            name="age"
            id="age"
            value=""
            placeholder="Enter your age.."
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Where do you live</label>
          <select className="form-control" name="country" id="country" onChange={handleSelectChange}>
            {COUNTRIES.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mt-10">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="package" id="package1" value="standard" onChange={handleInputChange} />
            <label className="form-check-label" htmlFor="package1">
              Standard
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="package" id="package2" value="safe" onChange={handleInputChange} />
            <label className="form-check-label" htmlFor="package2">
              Safe (+250HKD, 50%)
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="package" id="package3" value="super_safe" onChange={handleInputChange} />
            <label className="form-check-label" htmlFor="package3">
              Super Safe (+375HKD, 75%)
            </label>
          </div>
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
    </>
  );
};

export default PolicyForm;
