import styled from "styled-components";

export default function Header() {
  return <HeaderContainer>Header</HeaderContainer>;
}

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #efefef;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
