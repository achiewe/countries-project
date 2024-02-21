import { useQuery } from "react-query";
import { useCountryStore } from "../../store";
import axios from "axios";
const currencyApiKey = import.meta.env.VITE_REACT_APP_EXCHANGE_API_KEY;

export const fetchCurrencyInfo = async () => {
  const countryInfo = useCountryStore((state) => state.countryInfo);

  const CurrencyQueryKey = ["cachedCurrency", countryInfo?.[0]?.name];
  const { data: currency, isLoading: currencyLoading } = useQuery(
    CurrencyQueryKey,
    async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/convert?from=USD&to=GBP",

          {
            headers: { "X-Api-Key": currencyApiKey },
          }
        );
        console.log(response.data.result, "me var ak usd sds");
        return response.data.result;
      } catch (error) {}
    }
  );

  return currencyLoading;
};
