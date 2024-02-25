import { TextField } from "@mui/material";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useCountryStore } from "../../store";
import axios from "axios";
import { AirportsType } from "../../../type";
import { useState } from "react";
const airportsApiKey = import.meta.env.VITE_REACT_APP_AIRPORTS_API_KEY;

export default function AirportsList() {
  const [airportsName, setAirportsName] = useState<string>("");
  const countryInfo = useCountryStore((state) => state.countryInfo);

  const airportsQueryKey = ["cachedAirport", countryInfo?.[0]?.cca2];
  const { data: airports, isLoading: airportsLoading } = useQuery(
    airportsQueryKey,
    async () => {
      try {
        console.log("gaigzavna funqciaa");
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

  const filterAirportsTitle =
    airports && Array.isArray(airports)
      ? airports.filter((airport: any) =>
          airport.name.toLowerCase().includes(airportsName.toLowerCase())
        )
      : [];

  return (
    <AirportsContainer>
      <h1> Airports</h1>
      <TextField
        id="standard-basic"
        label="Search for Airport"
        variant="standard"
        value={airportsName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAirportsName(e.target.value)
        }
      />
      <div className="airportsDiv">
        <ul className="mainDivAirports">
          {filterAirportsTitle.map((airport: AirportsType, index: number) => (
            <li key={index}>
              {airport.name} - {airport.city} ({airport.iata})
            </li>
          ))}
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

  .mainDivAirports {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    justify-content: flex-start;
    min-width: 300px;
    max-width: 300px;

    @media (min-width: 768px) {
      min-width: 500px;
      max-width: 500px;
    }
  }

  p {
    font-size: 14px;
    display: inline;
    font-style: "normal";
    font-weight: 600;
  }
`;
