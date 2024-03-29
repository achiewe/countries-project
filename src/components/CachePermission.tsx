import { useEffect } from "react";
import { useCountryStore } from "../store";
import { CountryType } from "../../type";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LocationComponent = (): JSX.Element => {
  // bring the states in the component

  const allCountries = useCountryStore((state) => state.allCountries);

  //bring the set states in the component
  const setCountry = useCountryStore((state) => state.setCountry);
  const setShortCountry = useCountryStore((state) => state.setShortCountry);
  const setCountryInfo = useCountryStore((state) => state.setCountryInfo);
  const setAllCountries = useCountryStore((state) => state.setAllCountries);
  // change page of this
  const navigate = useNavigate();
  // user accept to share location
  const handleCountryInfo = (selectedCountry: string): void => {
    const selected = allCountries.filter((country) => {
      return country.name.common === selectedCountry;
    });

    setCountryInfo(selected);
  };

  // fetch country where is users location
  const fetchCountry = async (latitude: number, longitude: number) => {
    const apiKey: string = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY || "";

    // Replace with your API key s
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const countryResult = data.results.find(
        (result: any) =>
          result.types.includes("country") || result.types.includes("political")
      );
      if (countryResult) {
        const countryName = countryResult.address_components[3];
        navigate(
          `/Countries/${
            countryName.short_name ? "GEO" : countryName.short_name
          }`
        );
        setCountry(
          countryName.long_name === "Tbilisi"
            ? "Georgia"
            : countryName.long_name
        );
        setShortCountry(
          countryName.short_name === "Tbilisi" || "Georgia"
            ? "GEO"
            : countryName.short_name
        );
        handleCountryInfo(
          countryName.long_name === "Tbilisi"
            ? "Georgia"
            : countryName.long_name
        );
      }
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,altSpellings,cca2,cca3,shortName,capital,currencies,region,subregion,continents,population,borders,flags"
        );

        const data = response.data.map((country: CountryType) => {
          // Extracting currency information
          const currency = country.currencies
            ? Object.keys(country.currencies).map((currencyCode: any) => ({
                name: country.currencies![currencyCode].name,
                symbol: country.currencies![currencyCode].symbol,
              }))
            : [];

          return {
            name: {
              common: country.name.common,
              official: country.name.official,
            },
            altSpellings: country.altSpellings[0],
            capital: country.capital,
            cca2: country.cca2,
            cca3: country.cca3,
            currencies: currency.length > 0 ? currency : undefined,
            region: country.region,
            subregion: country.subregion,
            continents: country.continents?.[0],
            population: country.population,
            borders: country.borders ? country.borders.join(" ") : "",
            flags: {
              alt: country.flags?.alt,
              png: country.flags?.png,
              svg: country.flags?.svg,
            },
          };
        });
        // Sort data alphabetically by common name before setting
        data.sort((a: CountryType, b: CountryType) =>
          a.name.common.localeCompare(b.name.common)
        );
        setAllCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // useEffect fetch the country where is that location
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchCountry(latitude, longitude);
          },
          (error) => {
            console.error("Error getting location:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser");
      }
    };

    getLocation();
  }, [allCountries]);

  return <></>;
};

export default LocationComponent;
