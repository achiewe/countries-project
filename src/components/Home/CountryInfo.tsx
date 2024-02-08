import styled from "styled-components";
import mexicoImg from "../../../public/assets/flagMexico.png";
import { useEffect } from "react";
import axios from "axios";

export default function CountryInfo() {
  useEffect(() => {
    const takeCountryInfo = async () => {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,cca2,cca3,capital,currencies,region,subregion,continents,population,borders,flags"
      );
      console.log(response);
    };

    takeCountryInfo();
  }, []);

  return (
    <MainInfoDiv>
      <div className="flagNameDiv">
        <h1> country name</h1>
        <img src={mexicoImg} className="countryMap" />
      </div>
      <div className="flagNameDiv">
        <h3> Capital:</h3>
        <h4> Tbilisi</h4>
      </div>
      <div className="flagNameDiv">
        <h3> Continent:</h3>
        <h4> Tbilisi</h4>
      </div>
      <div className="flagNameDiv">
        <h3> Currency:</h3>
        <h4> Tbilisi</h4>
      </div>
      <div className="flagNameDiv">
        <h3> Population:</h3>
        <h4> Tbilisi</h4>
      </div>
      <div className="flagNameDiv">
        <h3> Region:</h3>
        <h4> Tbilisi</h4>
      </div>
      <div className="flagNameDiv">
        <h3> Borders:</h3>
        <h4> Tbilisi</h4>
      </div>
    </MainInfoDiv>
  );
}

// style for the component
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
