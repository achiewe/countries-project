import styled from "styled-components";
import InputCountry from "../components/Home/InputCountry";
import CountryInfo from "../components/Home/CountryInfo";

export default function Home() {
  return (
    <HomeMain>
      <InputCountry />
      <CountryInfo />
    </HomeMain>
  );
}

// style for the component
const HomeMain = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 5px;
  border: 1px solid grey;
  padding: 30px;
`;
