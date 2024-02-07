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
        <div className="mainDivAirports">
          <p> asdasdasdasdasd</p>
          <p> asdasdasdasasdasdascascasc</p>
        </div>
      </div>
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

  .airportsDiv {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .mainDivAirports {
    min-width: 400px;
    max-width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 50px;
  }

  p {
    font-size: 14px;
    font-weight: 800;
    color: black;
    font-style: normal;
  }
`;
