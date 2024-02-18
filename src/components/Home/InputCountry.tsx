import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select"; // Import SelectChangeEvent
import styled from "styled-components";
import { useCountryStore } from "../../store";

// InputCountry function
export default function InputCountry() {
  const setCountryInfo = useCountryStore((state) => state.setCountryInfo);
  const setCountry = useCountryStore((state) => state.setCountry);
  const country = useCountryStore((state) => state.country);

  const allCountries = useCountryStore((state) => state.allCountries);
  const handelCountryChange = (e: SelectChangeEvent<string>): void => {
    const selectedCountryInfo = allCountries.find(
      (countries) => countries.name.common === e.target.value
    );

    // Check if selectedCountryInfo is defined before setting
    if (selectedCountryInfo) {
      setCountry(e.target.value);
      setCountryInfo([selectedCountryInfo]); // Wrap selectedCountryInfo in an array
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
