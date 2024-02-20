import { TextField } from "@mui/material";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useCountryStore } from "../../store";
import axios from "axios";
import { AirportsType } from "../../../type";
const airportsApiKey = import.meta.env.VITE_REACT_APP_AIRPORTS_API_KEY;

export default function AirportsList() {
  const allCountries = useCountryStore((state) => state.allCountries);

  const airportsQueryKey = ["cachedAirport", allCountries?.[0]?.cca2];
  const { data: airports, isLoading: airportsLoading } = useQuery(
    airportsQueryKey,
    async () => {
      try {
        console.log(allCountries[0].cca2, "me var ak mtavariiii"); // <-- Here
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/airports?country=${allCountries[0].cca2}&fields=city,iata,name`,
          {
            headers: { "X-Api-Key": airportsApiKey },
          }
        );

        const data = response.data;

        const formattedAirports = data.map((airport: AirportsType) => ({
          city: airport.city,
          iata: airport.iata,
          name: airport.name,
        }));

        return formattedAirports;
      } catch (error) {
        console.error("Error fetching airports:", error);
        throw error; // Rethrow the error to be handled by the caller
      }
    },
    {
      enabled: !!allCountries?.[0]?.cca2,
    }
  );

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
        <ul>
          {airports.map((airport: any) => (
            <li key={airport.iata}>
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
