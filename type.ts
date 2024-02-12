interface CountryType {
  name: {
    common: string;
    official: string;
  };
  flag?: string;
  shortName?: string;
  capital?: string;
  continent?: string;
  currencies?: {
    name: string;
    symbol: string;
  };
  population?: number;
  region?: string;
  subregion?: string; // Add subregion property
  borders?: string[];
  flags?: string[]; // Add flags property
}

export default CountryType;
