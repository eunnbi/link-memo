import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import LinkMemoPage from "./pages/LinkMemoPage";
import EditPage from "./pages/EditPage";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/memo/*" element={<LinkMemoPage />}>
            <Route path=":categoryId" element={<LinkMemoPage />} />
          </Route>
          <Route path="/edit/*" element={<EditPage />}>
            <Route path=":memoId" element={<EditPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
