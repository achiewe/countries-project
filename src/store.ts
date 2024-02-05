import { create } from "zustand";

type CountryStore = {
  country: string;
  setCountry: (newCountry: string) => void;
};

export const useCountryStore = create<CountryStore>((set) => ({
  country: "",
  setCountry: (newCountry: string) => {
    set({ country: newCountry });
  },
}));
