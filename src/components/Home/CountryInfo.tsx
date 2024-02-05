import styled from "styled-components";

export default function CountryInfo() {
  return (
    <MainInfoDiv>
      <div className="flagNameDiv">
        <h1> country name</h1>
      </div>
    </MainInfoDiv>
  );
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
  }
`;
