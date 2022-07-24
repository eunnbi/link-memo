import CategoriesSection from "../components/Categories/CategoriesSection";
import FavoritesSection from "../components/LinkMemo/Favorites/FavoritesSection";
import MainHeader from "../components/Main/MainHeader";

const MainPage = () => {
  return (
    <main>
      <MainHeader />
      <CategoriesSection />
      <FavoritesSection />
    </main>
  );
};

export default MainPage;
