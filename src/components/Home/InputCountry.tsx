import styled from "styled-components";

export default function InputCountry() {
  return (
    <MainInputDiv>
      <input />
    </MainInputDiv>
  );
}

const MainInputDiv = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
