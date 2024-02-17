import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select"; // Import SelectChangeEvent
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useCountryStore } from "../../store";
import CountryType from "../../../type";

// InputCountry function
export default function InputCountry() {
  const setAllCountries = useCountryStore((state) => state.setAllCountries);
  const setCountryInfo = useCountryStore((state) => state.setCountryInfo);
  const setCountry = useCountryStore((state) => state.setCountry);
  const country = useCountryStore((state) => state.country);
  const setshortCountry = useCountryStore((state) => state.setShortCountry);
  const shortCountry = useCountryStore((state) => state.shortCountry);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,altSpellings,shortName,capital,currencies,region,subregion,continents,population,borders,flags"
        );
        console.log(response, "mevar");
        // console.log(response.data[0].currencies, "mevar");
        const data = response.data.map((country: CountryType) => {
          // Extracting currency information
          const currencies = country.currencies
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
            altSpellings: {
              shortName: country.altSpellings[0],
            },
            capital: country.capital,
            currencies: currencies.length > 0 ? currencies : undefined,
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

  const allCountries = useCountryStore((state) => state.allCountries);
  const handelCountryChange = (e: SelectChangeEvent<string>): void => {
    const selectedCountryInfo = allCountries.find(
      (countries) => countries.name.common === e.target.value
    );

    // Check if selectedCountryInfo is defined before setting
    if (selectedCountryInfo) {
      setCountry(e.target.value);
      setCountryInfo([selectedCountryInfo]); // Wrap selectedCountryInfo in an array
      // setshortCountry(selectedCountryInfo.altSpellings.shortName);
      // console.log(
      //   selectedCountryInfo.altSpellings.shortName,
      //   "undefined varrrr"
      // );
    } else {
      setCountry(""); // Reset selected country if not found
      setCountryInfo(null); // Set country info to null
      // setshortCountry(shortCountry, "erroria");
    }
  };

  return (
    <MainInputDiv>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country"
          value={country}
          onChange={handelCountryChange}
        >
          {allCountries.map(
            (country) =>
              country.name && (
                <MenuItem key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </MenuItem>
              )
          )}
        </Select>
      </FormControl>
    </MainInputDiv>
  );
}

const MainInputDiv = styled.div`
  width: 100%;
`;
