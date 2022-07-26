interface ICountryCurrencyMapping {
  [country: string]: string;
}

interface ICountryRateMapping {
  [country: string]: number;
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
