import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./page/Home";
import LocationComponent from "./components/CachePermission";
import Header from "./components/Header";
import CurrencyExchange from "./page/CurrencyExchange";
import Airports from "./page/Airports";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <MainContainer>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/Countries/:name`} replace />}
            />
            <Route path="/Countries/:name" element={<Home />} />
            <Route
              path="/Countries/:name/Currency"
              element={<CurrencyExchange />}
            />
            <Route path="/Countries/:name/Airports" element={<Airports />} />
          </Routes>
          <LocationComponent />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </MainContainer>
      </QueryClientProvider>
    </Router>
  );
}

// style for the component
const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  @media (min-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;
export default App;
