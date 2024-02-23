import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

export default function CurrencyConverter() {
  return (
    <ConverterConatiner>
      <h1> Currency Exchange</h1>
      <div className="formControlDiv">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            currency
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="country"
          >
            <MenuItem value="₾">₾</MenuItem>
            <MenuItem value="$">$</MenuItem>
            <MenuItem value="£">£</MenuItem>
            <MenuItem value="€">€</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            currency
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="country"
          >
            <MenuItem value="₾">₾</MenuItem>
            <MenuItem value="$">$</MenuItem>
            <MenuItem value="£">£</MenuItem>
            <MenuItem value="€">€</MenuItem>
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
  .dollarPng {
    width: 20px;
    height: 20px;
  }

  .currencyExchangeDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
`;
