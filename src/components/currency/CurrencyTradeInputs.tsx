import { TextField } from "@mui/material";
import styled from "styled-components";

export default function CurrencyTradeInputs() {
  return (
    <ContainerCurrencyInputs>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </ContainerCurrencyInputs>
  );
}

const ContainerCurrencyInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
