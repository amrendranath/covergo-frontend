export interface IFormWizardContextProps {
  children: JSX.Element;
}

export interface IFormWizardContextState {
  name: string;
  age: number;
  country: string;
  currency: string;
  package: string;
  premium: string;
  isError: boolean;
}

export interface IContextInitialValues {
  initialState: IFormWizardContextState;
  values: IFormWizardContextState;
  setValues: Function;
}
