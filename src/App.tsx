import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Heroes from "./components/Heroes";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer>
        <GlobalStyles />
        <Heroes />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </MainContainer>
    </QueryClientProvider>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
`;
export default App;
