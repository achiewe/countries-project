import { create } from "zustand";
import { CountryType, AirportsType } from "../type";

type CountryStore = {
  country: string;
  shortCountry: string;
  allCountries: CountryType[];
  countryInfo: CountryType[] | null;
  airportsInfo: AirportsType[];
  currencyFrom: string;
  currencyTo: string;
  setCurrencyTo: (newCurrency: string) => void;
  setCurrencyFrom: (newCurrency: string) => void;
  setCountryInfo: (newCountry: null | CountryType[]) => void;
  setAirportsInfo: (airports: AirportsType[]) => void;
  setAllCountries: (newCountry: CountryType[]) => void;
  setCountry: (newCountry: string) => void;
  setShortCountry: (newCoutry: string) => void;
};

export const useCountryStore = create<CountryStore>((set) => ({
  country: "",
  shortCountry: "",
  currencyFrom: "₾",
  currencyTo: "$",
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
  setCurrencyFrom: (newCurrency: string) => {
    set({ currencyFrom: newCurrency });
  },
  setCurrencyTo: (newCurrency: string) => {
    set({ currencyTo: newCurrency });
  },
  setCountryInfo: (newCountry: null | CountryType[]) => {
    set({ countryInfo: newCountry });
  },
  setAirportsInfo: (airports: AirportsType[]) => {
    set({ airportsInfo: airports });
  },
}));
