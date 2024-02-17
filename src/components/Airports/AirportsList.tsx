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
      <div className="airportsDiv">
        <div className="mainDivAirports">
          <p> asdasdasdasdasd</p>
          <p> asdasdasdasasdasd</p>
        </div>
      </div>
    </AirportsContainer>
  );
}

// style for the component
const AirportsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .mainDivAirports {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 100px;
    }
  }

  p {
    font-size: 14px;
    display: inline;
    font-style: "normal";
    font-weight: 600;
  }
`;
