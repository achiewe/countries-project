import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styled from "styled-components";
import { useCountryStore } from "../../store";

export default function CurrencyConverter() {
  const currencyFrom = useCountryStore((state) => state.currencyFrom);
  const currencyTo = useCountryStore((state) => state.currencyTo);
  const setCurrencyFrom = useCountryStore((state) => state.setCurrencyFrom);
  const setCurrencyTo = useCountryStore((state) => state.setCurrencyTo);

  return (
    <ConverterConatiner>
      <h1> Currency Exchange</h1>
      <div className="formControlDiv">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="from-currency-label">From</InputLabel>
          <Select
            labelId="from-currency-label"
            id="from-currency"
            label="From"
            value={currencyFrom}
            onChange={(e) => setCurrencyFrom(e.target.value)}
          >
            <MenuItem value="₾">₾</MenuItem>
            <MenuItem value="$">$</MenuItem>
            <MenuItem value="£">£</MenuItem>
            <MenuItem value="€">€</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="to-currency-label">To</InputLabel>
          <Select
            labelId="to-currency-label"
            id="to-currency"
            label="To"
            value={currencyTo}
            onChange={(e) => setCurrencyTo(e.target.value)}
          >
            <MenuItem value="₾" disabled={currencyFrom === "₾"}>
              ₾
            </MenuItem>
            <MenuItem value="$" disabled={currencyFrom === "$"}>
              $
            </MenuItem>
            <MenuItem value="£" disabled={currencyFrom === "£"}>
              £
            </MenuItem>
            <MenuItem value="€" disabled={currencyFrom === "€"}>
              €
            </MenuItem>
          </Select>
        </FormControl>
      </div>
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
