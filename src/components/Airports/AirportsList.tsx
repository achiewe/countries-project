import { TextField } from "@mui/material";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useCountryStore } from "../../store";
import axios from "axios";
import { AirportsType } from "../../../type";
const airportsApiKey = import.meta.env.VITE_REACT_APP_AIRPORTS_API_KEY;

export default function AirportsList() {
  const countryInfo = useCountryStore((state) => state.countryInfo);

  const airportsQueryKey = ["cachedAirport", countryInfo?.[0]?.cca2];
  const { data: airports, isLoading: airportsLoading } = useQuery(
    airportsQueryKey,
    async () => {
      try {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/airports?country=${countryInfo?.[0]?.cca2}&fields=city,iata,name`,
          {
            headers: { "X-Api-Key": airportsApiKey },
          }
        );

        // Filter out airports with empty IATA codes
        return response.data.filter((item: AirportsType) => item.iata !== "");
      } catch (error) {
        console.error("Error fetching airports:", error);
        throw error; // Rethrow the error to be handled by the caller
      }
    },
    {
      enabled: !!countryInfo?.[0]?.cca2,
    }
  );

  if (airportsLoading) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }

  if (!airports) {
    return <div>No airports data available</div>;
  }

  return (
    <AirportsContainer>
      <h1> Airports</h1>
      <TextField
        id="standard-basic"
        label="Search for Airport"
        variant="standard"
      />
      <div className="airportsDiv">
        <ul className="mainDivAirports">
          {airports.map(
            (
              airport: any,
              index: number // Use index as a fallback key
            ) => (
              <li key={index}>
                {airport.name} - {airport.city} ({airport.iata})
              </li>
            )
          )}
        </ul>
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
  min-width: 300px;
  max-width: 300px;

  .mainDivAirports {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
    min-width: 300px;
    max-width: 300px;
  }

  p {
    font-size: 14px;
    display: inline;
    font-style: "normal";
    font-weight: 600;
    min-width: 300px;
    max-width: 300px;
  }
`;
