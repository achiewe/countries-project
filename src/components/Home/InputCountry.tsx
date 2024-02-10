import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCountryStore } from "../../store";

// InputCountry function
export default function InputCountry() {
  const setAllCountries = useCountryStore((state) => state.setAllCountries);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,continents,population,borders,flags"
        );
        const data = response.data.map((country: any) => ({
          name: country.name.common,
          capital: country.capital,
          currency: country.currencies[0]?.name || "Unknown", // Handling if currencies array is empty
          region: country.region,
          subregion: country.subregion,
          continent: country.continent,
          population: country.population,
          borders: country.borders,
          flag: country.flags[0],
          // Add more properties if needed
        }));
        setAllCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const allCountries = useCountryStore((state) => state.allCountries);
  const handelCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <MainInputDiv>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country"
          value={selectedCountry}
          onChange={() => {
            handelCountryChange;
          }}
        >
          {allCountries.map(
            (country) =>
              country.name && (
                <MenuItem key={country.name} value={country.name}>
                  {country.name}
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
