interface CountryType {
  name: {
    common: string;
    official: string;
  };
  altSpellings: {
    shortName: string[];
  };
  flag?: string;
  capital?: string;
  continents?: string[];
  currencies?:
    | {
        name: string;
        symbol: string;
      }[]
    | undefined;
  population?: number;
  region?: string;
  subregion?: string; // Add subregion property
  borders?: string[];
  flags?: {
    alt: string;
    png: string;
    svg: string;
  }; // Add flags property
}

export default CountryType;
