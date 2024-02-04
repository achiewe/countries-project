import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Heroes from "./components/Heroes";
import GlobalStyles from "./GlobalStyles";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <GlobalStyles />
        <div>imean heroebi</div>
        <Heroes />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </main>
    </QueryClientProvider>
  );
}

export default App;
