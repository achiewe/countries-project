interface CountryType {
  altSpellings?: string[];
  area?: number;
  borders?: string[];
  capital?: string[];
  capitalInfo?: { latlng: [number, number] };
  car?: { signs: string[]; side: "right" | "left" };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms?: { png: string; svg: string };
  continents?: string[];
  currencies?: Record<string, { name: string; symbol: string }>;
  demonyms?: Record<string, string>;
  fifa?: string;
  flag?: string;
  flags?: { png: string; svg: string; alt: string };
  gini?: { 2019: number };
  idd?: { root: string; suffixes: string[] };
  independent?: boolean;
  landlocked?: boolean;
  languages?: Record<string, string>;
  latlng?: [number, number];
  maps?: { googleMaps: string; openStreetMaps: string };
  name: {
    common: string;
    official: string;
    nativeName: Record<string, string>;
  };
  population?: number;
  postalCode?: { format: string; regex: string };
  region?: string;
  startOfWeek?: string;
  status?: string;
  subregion?: string;
  timezones?: string[];
  tld?: string[];
  translations?: Record<string, { official: string; common: string }>;
  unMember?: boolean;
}

export default CountryType;
