import CategoriesSection from "../components/Categories/CategoriesSection";
import FavoritesSection from "../components/LinkMemo/FavoritesSection";
import Logout from "../components/Logout";
import styled from "styled-components";
import ThemeButton from "../components/ThemeButton";

interface MainPageProps {
  changeTheme: () => void;
}

const MainPage = ({ changeTheme }: MainPageProps) => {
  return (
    <main>
      <Heading>
        <Logout />
        <h1>Link Memo</h1>
        <ThemeButton changeTheme={changeTheme} />
      </Heading>
      <CategoriesSection />
      <FavoritesSection />
    </main>
  );
};

export default MainPage;

const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0 2rem;
  h1 {
    width: 100%;
    font-family: Pangolin;
    font-size: 2.5rem;
    text-align: center;
  }
`;
