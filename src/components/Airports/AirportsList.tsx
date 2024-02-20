import { TextField } from "@mui/material";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useCountryStore } from "../../store";

export default function AirportsList() {
  const allCountries = useCountryStore((state) => state.allCountries);

  const airportsQueryKey = ["cachedAirport", allCountries?.[0]?.cca2];
  const { data: airports, isLoading: airportsLoading } = useQuery(
    airportsQueryKey,
    async () => {
      try {
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
