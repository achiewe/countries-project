import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCountryStore } from "../store";

export default function Header() {
  const pathname = window.location.pathname;
  useNavigate();

  const shortCountryName = useCountryStore((state) => state.shortCountry);

  return (
    <HeaderContainer>
      <Link to={`/Countries/${shortCountryName}`} className="homeLink">
        <svg
          style={{
            fill:
              pathname === `/Countries/${shortCountryName}`
                ? "#7ec8e3"
                : "#000000",
          }}
          className="headerSvgs"
          height="30"
          width="30"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 291.295 291.295"
          xmlSpace="preserve"
        >
          <polygon
            points="192.128,81.747 249.286,7.979 79.841,7.979 79.841,0 42.009,0 42.009,291.295 79.841,291.295 79.841,153.627 
	249.286,153.627 "
          />
        </svg>
      </Link>

      <Link
        to={`/Countries/${shortCountryName}/Currency`}
        className="currencySvg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="headerSvgs"
          width="30"
          height="30"
          style={{
            fill:
              pathname === `/Countries/${shortCountryName}/Currency`
                ? "#7ec8e3"
                : "#000000",
          }}
          viewBox="0 0 16 16"
        >
          <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25z" />
        </svg>
      </Link>

      <Link
        to={`/Countries/${shortCountryName}/Airports`}
        className="airportLink"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="headerSvgs"
          viewBox="0 0 24 24"
          width="30"
          style={{
            fill:
              pathname === `/Countries/${shortCountryName}/Airports`
                ? "#7ec8e3"
                : "#000000",
          }}
          height="30"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M14 8.947L22 14v2l-8-2.526v5.36l3 1.666V22l-4.5-1L8 22v-1.5l3-1.667v-5.36L3 16v-2l8-5.053V3.5a1.5 1.5 0 0 1 3 0v5.447z" />
          </g>
        </svg>
      </Link>
    </HeaderContainer>
  );
}

// style for the component
const HeaderContainer = styled.header`
  width: 200px;
  background-color: #efefef;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  gap: 35px;
  margin-bottom: 20px;
  border-radius: 20px;
  justify-content: center;

  @media (min-width: 768px) {
    width: 400px;
    gap: 100px;
  }

  @media (min-width: 1024px) {
    margin-top: 30px;
    padding: 15px 0;
  }

  .headerSvgs {
    @media (min-width: 1024px) {
      width: 35px;
      height: 35px;
    }
  }

  a polygon:hover {
    fill: #7ec8e3;
  }
  a path:hover {
    fill: #7ec8e3;
  }
`;
