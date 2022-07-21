import CategoriesSection from "../components/Main/CategoriesSection";
import FavoritesSection from "../components/Main/FavoritesSection";
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
