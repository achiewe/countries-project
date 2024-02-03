import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>imean heroebi</div>
    </QueryClientProvider>
  );
}

export default App;
