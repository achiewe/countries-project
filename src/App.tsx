import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Home from "./page/Home";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer>
        <GlobalStyles />
        <Home />

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </MainContainer>
    </QueryClientProvider>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`;
export default App;
