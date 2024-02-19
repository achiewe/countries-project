import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select"; // Import SelectChangeEvent
import styled from "styled-components";
import { useCountryStore } from "../../store";
import { useNavigate } from "react-router-dom";

// InputCountry function
export default function InputCountry() {
  const setCountryInfo = useCountryStore((state) => state.setCountryInfo);
  const setCountry = useCountryStore((state) => state.setCountry);
  const setShortCountry = useCountryStore((state) => state.setShortCountry);
  const navigate = useNavigate();

  const country = useCountryStore((state) => state.country);
  const allCountries = useCountryStore((state) => state.allCountries);
  // to take the country name and take short name
  const handelCountryChange = (e: SelectChangeEvent<string>): void => {
    const selectedCountryInfo = allCountries.find(
      (countries) => countries.name.common === e.target.value
    );

    if (selectedCountryInfo) {
      setCountry(e.target.value);
      setCountryInfo([selectedCountryInfo]);
      setShortCountry(selectedCountryInfo.altSpellings);
      const shortName = selectedCountryInfo.altSpellings;
      navigate(`/Countries/${shortName}`);
    } else {
      setCountry("");
      setCountryInfo(null);
      setShortCountry("");
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
