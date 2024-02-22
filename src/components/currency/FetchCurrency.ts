import { useQuery } from "react-query";
import { useCountryStore } from "../../store";
import axios from "axios";
const currencyApiKey = import.meta.env.VITE_REACT_APP_EXCHANGE_API_KEY;

export const fetchCurrencyInfo = async () => {
  const countryInfo = useCountryStore((state) => state.countryInfo);
  const CurrencyQueryKey = ["cachedCurrency", countryInfo?.[0]?.name];

  // Fetching currency conversion rates
  const { data: currency, isLoading: currencyLoading } = useQuery(
    CurrencyQueryKey,
    async () => {
      try {
        // Construct the URL with necessary parameters
        const url = `https://api.exchangerate.host/convert?from=USD&to=GBP&amount=10&access_key=${currencyApiKey}`;

        // Make GET request to fetch currency conversion rates
        const response = await axios.get(url);

        console.log("API Response:", response.data);

        // Check if the response indicates success
        if (response.data.success) {
          console.log("Currency conversion result:", response.data.result);
          return response.data.result;
        } else {
          // Log the error if the response indicates failure
          console.error("Error fetching currency:", response.data.error);
          throw new Error(response.data.error.info);
        }
      } catch (error) {
        // Log and rethrow the error to be caught by react-query
        console.error("Error fetching currency:", error);
        throw error;
      }
    }
  );

  return currencyLoading;
};
