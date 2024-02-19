import { create } from "zustand";
import CountryType from "../type";
import AirportType from "../type";

type CountryStore = {
  country: string;
  shortCountry: string;
  allCountries: CountryType[];
  countryInfo: CountryType[] | null;
  airportsInfo: AirportType[];
  setCountryInfo: (newCountry: null | CountryType[]) => void;
  setAirportsInfo: (airports: AirportType[]) => void;
  setAllCountries: (newCountry: CountryType[]) => void;
  setCountry: (newCountry: string) => void;
  setShortCountry: (newCoutry: string) => void;
};

export const useCountryStore = create<CountryStore>((set) => ({
  country: "",
  shortCountry: "",
  allCountries: [],
  airportsInfo: [],
  countryInfo: null,
  setCountry: (newCountry: string) => {
    set({ country: newCountry });
  },
  setShortCountry: (newCountry: string) => {
    set({ shortCountry: newCountry });
  },
  setAllCountries: (newCountry: CountryType[]) => {
    set({ allCountries: newCountry });
  },
  setCountryInfo: (newCountry: null | CountryType[]) => {
    set({ countryInfo: newCountry });
  },
  setAirportsInfo: (airports: AirportType[]) => {
    set({ airportsInfo: airports });
  },
}));
