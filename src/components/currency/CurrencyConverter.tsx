import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";
import { SelectChangeEvent } from "@mui/material/Select";
import { useCountryStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { fetchCurrencyInfo } from "./FetchCurrency";

export default function CurrencyConverter() {
  const country = useCountryStore((state) => state.country);

  const setCountryInfo = useCountryStore((state) => state.setCountryInfo);
  const setCountry = useCountryStore((state) => state.setCountry);
  const setShortCountry = useCountryStore((state) => state.setShortCountry);
  const navigate = useNavigate();

  const allCountries = useCountryStore((state) => state.allCountries);

  const handelCountryChange = (e: SelectChangeEvent<string>): void => {
    const selectedCountryInfo = allCountries.find(
      (countries) => countries.name.common === e.target.value
    );

    if (selectedCountryInfo) {
      setCountry(e.target.value);
      setCountryInfo([selectedCountryInfo]);
      setShortCountry(selectedCountryInfo.altSpellings);
      const shortName = selectedCountryInfo.altSpellings;
      navigate(`/Countries/${shortName}/Currency`);
    } else {
      setCountry("");
      setCountryInfo(null);
      setShortCountry("");
    }
  };

  fetchCurrencyInfo();

  return (
    <ConverterConatiner>
      <h1> Currency Exchange</h1>
      <div className="formControlDiv">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            country
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="country"
            value={country}
            onChange={handelCountryChange}
          >
            {allCountries.map(
              (country) =>
                country.name && (
                  <MenuItem
                    key={country.name.common}
                    value={country.name.common}
                  >
                    {country.name.common}
                  </MenuItem>
                )
            )}
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            country
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="country"
            value=""
          >
            {/* {allCountries.map(
              (country) =>
                country.name && (
                  <MenuItem
                    key={country.name.common}
                    value={country.name.common}
                  >
                    {country.name.common}
                  </MenuItem>
                )
            )} */}
          </Select>
        </FormControl>
      </div>
      <div className="currencyExchangeDiv"></div>
    </ConverterConatiner>
  );
}

// style for the component
const ConverterConatiner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  h1 {
    font-size: 24px;
    font-weight: 800;
    color: black;
    font-style: normal;
  }

  .formControlDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .currencyExchangeDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
`;
