import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { COUNTRIES } from "../../../constants/countries";
import { COUNTRY_CURRENCY_MAPPING, RATE } from "../../../constants/countryCurrency";
import { FormWizardContext } from "../../../contexts/formWizardContext";
import { IFormWizardContextState } from "../../../contexts/formWizardContext/types";

interface IPackagePrice {
  Standard: number;
  Safe: number;
  "Super Safe": number;
  [value: string]: number;
}

const PolicyForm: React.FC = () => {
  const navigate = useNavigate();
  const { values, setValues } = useContext(FormWizardContext);
  const [packagePrice, setPackagePrice] = useState<IPackagePrice>({ Standard: 0, Safe: 0, "Super Safe": 0 });

  const isEmptyForm = () => {
    if (!values.name || !values.age || !values.country || !values.package) {
      return true;
    }
    return false;
  };

  const handleNext = () => {
    if (isEmptyForm()) {
      alert("Fill all fields completely.");
      return;
    }
    if (values.age > 100) {
      setValues((preState: IFormWizardContextState) => ({ ...preState, isError: true }));
    } else {
      navigate("/summary");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setValues((preState: IFormWizardContextState) => ({ ...preState, [name]: name === "age" ? +value : value }));
  };

  const handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    setValues((preState: IFormWizardContextState) => ({
      ...preState,
      [name]: value,
      currency: value ? COUNTRY_CURRENCY_MAPPING[value] : "",
    }));
  };

  useEffect(() => {
    if (values?.age && values?.country) {
      const standardPrice = 10 * values.age * RATE[values.country];
      const safePrice = standardPrice + standardPrice * 0.5;
      const superSafePrice = standardPrice + standardPrice * 0.75;
      setPackagePrice({ Standard: standardPrice, Safe: safePrice, "Super Safe": superSafePrice });
      setValues((preState: IFormWizardContextState) => ({
        ...preState,
        premium:
          values.package === "Standard"
            ? standardPrice
            : values.package === "Safe"
            ? safePrice
            : values.package === "Super Safe"
            ? superSafePrice
            : 0,
      }));
    }
  }, [values?.age, values.country, values.package]);

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
            value={values?.name}
            placeholder="Enter your name.."
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            className="form-control"
            type="number"
            name="age"
            id="age"
            value={values?.age}
            placeholder="Enter your age.."
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Where do you live</label>
          <select className="form-control" name="country" id="country" value={values?.country} onChange={handleSelectChange}>
            <option value="">Select your country.</option>
            {COUNTRIES.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mt-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="package"
              id="package1"
              value="Standard"
              checked={values.package === "Standard"}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="package1">
              Standard
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="package"
              id="package2"
              value="Safe"
              checked={values.package === "Safe"}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="package2">
              {`Safe (+${packagePrice.Safe - packagePrice.Standard}${values.currency}, 50%)`}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="package"
              id="package3"
              value="Super Safe"
              checked={values.package === "Super Safe"}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="package3">
              {`Super Safe (+${packagePrice["Super Safe"] - packagePrice.Standard}${values.currency}, 75%)`}
            </label>
          </div>
        </div>
      </form>
      <h1 className="text-2xl font-extrabold my-5">Your premium is: {values.premium + values.currency}</h1>
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
