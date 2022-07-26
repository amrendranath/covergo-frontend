interface ICountryCurrencyMapping {
  [value: string]: string;
}

interface ICountryRateMapping {
  [value: string]: number;
}

export const COUNTRY_CURRENCY_MAPPING: ICountryCurrencyMapping = {
  "Hong Kong": "HKD",
  USA: "USD",
  Australia: "AUD",
};

export const RATE: ICountryRateMapping = {
  "Hong Kong": 1,
  USA: 2,
  Australia: 3,
};
