import { TextField } from "@mui/material";
import styled from "styled-components";

export default function AirportsList() {
  return (
    <AirportsContainer>
      <h1> Airports</h1>
      <TextField
        id="standard-basic"
        label="Search for Airport"
        variant="standard"
      />
      <div className="currencyExchangeDiv"></div>
    </AirportsContainer>
  );
}

const AirportsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
