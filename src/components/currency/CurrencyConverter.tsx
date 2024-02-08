import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

export default function CurrencyConverter() {
  return (
    <ConverterConatiner>
      <h1> Currency Exchange</h1>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">country</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="country"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
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

  .currencyExchangeDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
`;
