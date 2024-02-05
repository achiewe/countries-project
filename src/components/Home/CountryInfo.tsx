import styled from "styled-components";

export default function CountryInfo() {
  return <MainInfoDiv>CountryInfo</MainInfoDiv>;
}

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
`;
