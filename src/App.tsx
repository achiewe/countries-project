import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Heroes from "./components/Heroes";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <div>imean heroebi</div>
      <Heroes />
    </QueryClientProvider>
  );
}

export default App;
