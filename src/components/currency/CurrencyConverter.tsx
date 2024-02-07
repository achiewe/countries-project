import styled from "styled-components";

export default function CurrencyConverter() {
  return (
    <ConverterConatiner>
      <h1> Currency Exchange</h1>
    </ConverterConatiner>
  );
}

const ConverterConatiner = styled.div`
  display: flex;

  h1 {
    font-size: 24px;
    font-weight: 800;
    color: black;
    font-style: normal;
  }
`;
