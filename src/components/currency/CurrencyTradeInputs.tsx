import { TextField } from "@mui/material";
import styled from "styled-components";
import { useCountryStore } from "../../store";

export default function CurrencyTradeInputs() {
  const currencyFrom = useCountryStore((state) => state.currencyFrom);
  const currencyTo = useCountryStore((state) => state.currencyTo);

  const exchangeRates = {
    GEL: {
      USD: 0.38, // 1 GEL = 0.38 USD
      EUR: 0.33, // 1 GEL = 0.33 EUR
      GBP: 0.28, // 1 GEL = 0.28 GBP
    },
    USD: {
      GEL: 2.65, // 1 USD = 2.65 GEL
      EUR: 0.88, // 1 USD = 0.88 EUR
      GBP: 0.75, // 1 USD = 0.75 GBP
    },
    EUR: {
      GEL: 3.03, // 1 EUR = 3.03 GEL
      USD: 1.14, // 1 EUR = 1.14 USD
      GBP: 0.85, // 1 EUR = 0.85 GBP
    },
    GBP: {
      GEL: 3.54, // 1 GBP = 3.54 GEL
      USD: 1.33, // 1 GBP = 1.33 USD
      EUR: 1.18, // 1 GBP = 1.18 EUR
    },
  };
  return (
    <ContainerCurrencyInputs>
      <TextField
        id="standard-basic"
        label={`Exchange ${currencyFrom} to ${currencyTo}`}
        variant="standard"
      />

      <svg
        fill="#000000"
        height="20px"
        width="20px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <path
                d="M85.333,213.333h341.333C473.728,213.333,512,175.061,512,128s-38.272-85.333-85.333-85.333H85.333
				C38.272,42.667,0,80.939,0,128S38.272,213.333,85.333,213.333z"
              />
              <path
                d="M426.667,298.667H85.333C38.272,298.667,0,336.939,0,384s38.272,85.333,85.333,85.333h341.333
				C473.728,469.333,512,431.061,512,384S473.728,298.667,426.667,298.667z"
              />
            </g>
          </g>
        </g>
      </svg>
      <TextField
        id="standard-basic"
        label={`Exchange ${currencyFrom} to ${currencyTo}`}
        variant="standard"
      />
    </ContainerCurrencyInputs>
  );
}

const ContainerCurrencyInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 30px;
`;
