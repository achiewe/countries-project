import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useCountryStore } from "../../store";
import CountryType from "../../../type";

export default function InputCountry() {
  const setAllCountries = useCountryStore((state) => state.setAllCountries);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,continents,population,borders,flags"
        );
        const data = response.data.map((country: CountryType) => ({
          name: country.name,
          nameOff: country.name,
          capital: country.capital,
          currency: country.currency,
          region: country.region,
          subregion: country.region,
          continent: country.continent,
          population: country.population,
          borders: country.borders,
          flag: country.flag,
          // Add more properties if needed
        }));
        setAllCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  const allCountries = useCountryStore((state) => state.allCountries);

  return (
    <MainInputDiv>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={10}
        >
          {allCountries?.map((country) => (
            <MenuItem key={country.name} value={country.name}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </MainInputDiv>
  );
}

const MainInputDiv = styled.div`
  width: 100%;
`;
