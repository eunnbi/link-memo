import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import LinkMemoPage from "./pages/LinkMemoPage";
import EditPage from "./pages/EditPage";
import SharePage from "./pages/SharePage";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import ModalsProvider from "./contexts/ModalsContext";
import Modals from "./components/common/Modals";

const THEME = "theme" as const;

const queryClient = new QueryClient();
function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const changeTheme = () => {
    setIsLightTheme(!isLightTheme);
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
        <ModalsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/main"
                element={<MainPage changeTheme={changeTheme} />}
              />
              <Route path="/memo/*" element={<LinkMemoPage />}>
                <Route path=":categoryId" element={<LinkMemoPage />} />
              </Route>
              <Route path="/edit/*" element={<EditPage />}>
                <Route path=":memoId" element={<EditPage />} />
              </Route>
              <Route path="/share" element={<SharePage />} />
            </Routes>
            <Modals />
          </BrowserRouter>
        </ModalsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
