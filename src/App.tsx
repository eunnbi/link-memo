import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import LinkMemoPage from "./pages/LinkMemoPage";
import EditPage from "./pages/EditPage";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { getUserId } from "./utils/auth";

const THEME = "theme" as const;

const queryClient = new QueryClient();
function App() {
  const userId = getUserId();
  const [isLightTheme, setIsLightTheme] = useState(true);
  const changeTheme = () => {
    setIsLightTheme((isLightTheme) => !isLightTheme);
    window.localStorage.setItem(THEME, JSON.stringify(!isLightTheme));
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_KAKAO_KEY);
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    console.log(window.Kakao.isInitialized());

    const theme = window.localStorage.getItem(THEME);
    if (theme !== null) {
      setIsLightTheme(JSON.parse(theme));
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                userId ? <MainPage changeTheme={changeTheme} /> : <LoginPage />
              }
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/memo/*" element={<LinkMemoPage />}>
              <Route path=":categoryId" element={<LinkMemoPage />} />
            </Route>
            <Route path="/edit/*" element={<EditPage />}>
              <Route path=":memoId" element={<EditPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
