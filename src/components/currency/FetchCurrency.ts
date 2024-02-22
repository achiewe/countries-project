import { useQuery } from "react-query";
import { useCountryStore } from "../../store";
import axios from "axios";

export const fetchCurrencyInfo = async () => {
  const countryInfo = useCountryStore((state) => state.countryInfo);

  // Fetching currency conversion rates
};
