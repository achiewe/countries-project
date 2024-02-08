import { create } from "zustand";
import CountryType from "../type";

type CountryStore = {
  country: string;
  shortCountry: string;
  allCountries: CountryType[];
  setAllCountries: (newCountry: CountryType[]) => void;
  setCountry: (newCountry: string) => void;
  setShortCountry: (newCoutry: string) => void;
};

export const useCountryStore = create<CountryStore>((set) => ({
  country: "",
  shortCountry: "",
  allCountries: [],
  setCountry: (newCountry: string) => {
    set({ country: newCountry });
  },
  setShortCountry: (newCountry: string) => {
    set({ shortCountry: newCountry });
  },
  setAllCountries: (newCountry: CountryType[]) => {
    set({ allCountries: newCountry });
  },
}));
