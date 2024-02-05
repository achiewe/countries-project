import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import LocationComponent from "./components/CachePermission";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer>
        <GlobalStyles />

        <LocationComponent />
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
  background-color: #ffffff;
`;
export default App;
