import styled from "styled-components";

export default function Home() {
  return <HomeMain>Home</HomeMain>;
}

const HomeMain = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #e2e2e2;
  display: flex;
  border-radius: 5px;
  height: 500px;
  padding: 30px;
`;
