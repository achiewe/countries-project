import styled from "styled-components";
import { useCountryStore } from "../../store";

export default function CountryInfo() {
  const countryInfo = useCountryStore((state) => state.countryInfo);

  // Check if countryInfo is null or undefined
  if (!countryInfo) {
    return <div>Loading...</div>; // Return a loading indicator or handle null case
  }

  return (
    <MainInfoDiv>
      <div className="flagNameDiv">
        <h1>{countryInfo[0].name.common}</h1>
        {/* <img src={countryInfo[0].flags.png} className="countryMap" alt={`${countryInfo[0].name.common} flag`} /> */}
      </div>
      <div className="flagNameDiv">
        <h3>Capital:</h3>
        <h4>{countryInfo[0].capital}</h4>
      </div>
      <div className="flagNameDiv">
        <h3>Continent:</h3>
        <h4>{countryInfo[0].continents}</h4>
      </div>
      <div className="flagNameDiv">
        <h3>Currency:</h3>
        <h4>
          {countryInfo[0].currencies?.name} ({countryInfo[0].currencies?.symbol}
          )
        </h4>
      </div>
      <div className="flagNameDiv">
        <h3>Population:</h3>
        <h4>{countryInfo[0].population}</h4>
      </div>
      <div className="flagNameDiv">
        <h3>Region:</h3>
        <h4>{countryInfo[0].region}</h4>
      </div>
      <div className="flagNameDiv">
        <h3>Borders:</h3>
        <h4>{countryInfo[0].borders}</h4>
      </div>
    </MainInfoDiv>
  );
}

// Style for the component
const MainInfoDiv = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  gap: 20px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.2) 0px 2px 1px -1px;

  .flagNameDiv {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 18px;
      font-weight: 800;
      color: black;
      font-style: normal;
    }

    .countryMap {
      width: 40px;
      height: 30px;
    }

    h3 {
      font-size: 16px;
      font-weight: 800;
      color: black;
      font-style: normal;
    }

    h4 {
      font-size: 16px;
      font-weight: 400;
      color: black;
      font-style: normal;
    }
  }
`;
