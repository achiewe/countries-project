import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select"; // Import SelectChangeEvent
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCountryStore } from "../../store";
import CountryType from "../../../type";

// InputCountry function
export default function InputCountry() {
  const setAllCountries = useCountryStore((state) => state.setAllCountries);
  const setCountryInfo = useCountryStore((state) => state.setCountryInfo);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,continents,population,borders,flags"
        );
        console.log(response);
        const data = response.data.map((country: CountryType) => ({
          name: {
            common: country.name.common,
            official: country.name.official,
          },
          capital: country.capital,
          currencies: {
            name: country.currencies?[0].name?,
            symbol: country.currencies?[0].symbol?,
          },
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
        }));
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
      (country) => country.name.common === e.target.value
    );

    // Check if selectedCountryInfo is defined before setting
    if (selectedCountryInfo) {
      setSelectedCountry(e.target.value);
      setCountryInfo([selectedCountryInfo]); // Wrap selectedCountryInfo in an array
    } else {
      setSelectedCountry(""); // Reset selected country if not found
      setCountryInfo(null); // Set country info to null
    }
  };

  return (
    <MainInputDiv>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country"
          value={selectedCountry}
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
