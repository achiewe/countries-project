import styled from "styled-components";
import CurrencyConverter from "../components/currency/CurrencyConverter";
import CurrencyTradeInputs from "../components/currency/CurrencyTradeInputs";

export default function CurrencyExchange() {
  return (
    <CurrencyContainer>
      <CurrencyConverter />
      <CurrencyTradeInputs />
    </CurrencyContainer>
  );
}

const CurrencyContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid grey;
  padding: 30px 0;
`;
