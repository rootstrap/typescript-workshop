import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ListView from "components/PokemonListView";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen font-poppins bg-background">
        <ListView />
      </div>
    </QueryClientProvider>
  );
}

export default App;
