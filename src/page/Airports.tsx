import styled from "styled-components";

export default function Airports() {
  return <AirportsContainer></AirportsContainer>;
}

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
