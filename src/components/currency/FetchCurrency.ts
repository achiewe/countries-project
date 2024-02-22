import { useQuery } from "react-query";
import { useCountryStore } from "../../store";
import axios from "axios";
const currencyApiKey = import.meta.env.VITE_REACT_APP_EXCHANGE_API_KEY;

export const fetchCurrencyInfo = async () => {
  const countryInfo = useCountryStore((state) => state.countryInfo);
  const CurrencyQueryKey = ["cachedCurrency", countryInfo?.[0]?.name];

  // Fetching currency conversion rates
};
