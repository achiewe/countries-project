import styled from "styled-components";
import AirportsList from "../components/Airports/AirportsList";

export default function Airports() {
  return (
    <AirportsContainer>
      <AirportsList />
    </AirportsContainer>
  );
}

// style for the component
const AirportsContainer = styled.div`
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
