import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { ThemeProvider } from "./hooks/use-theme";
import CheatsheetPage from "./pages/CheetSheet";
import Cheatsheets from "./pages/CheeatSheets";
import AboutCheatsheet from "./pages/About";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cheatsheets" element={<Cheatsheets />} />
            <Route path="/cheatsheets/:slug" element={<CheatsheetPage />} />
            <Route path="/about" element={<AboutCheatsheet />} />
           </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;