import { create } from "zustand";

type CountryStore = {
  country: string;
};

export const CountryStore = create<CountryStore>(() => ({
  country: "",
}));
