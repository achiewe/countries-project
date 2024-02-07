import styled from "styled-components";
import CurrencyConverter from "../components/currency/CurrencyConverter";

export default function CurrencyExchange() {
  return (
    <CurrencyContainer>
      <h1> Currency Exchange</h1>
      <CurrencyConverter />
    </CurrencyContainer>
  );
}

const CurrencyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;

  h1 {
    font-size: 18px;
    font-weight: 800;
    color: black;
    font-style: normal;
  }
`;
