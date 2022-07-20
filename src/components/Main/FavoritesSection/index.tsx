import styled from "styled-components";

const FavoritesSection = () => {
  return (
    <section>
      <Heading>
        <h2>
          <span>💖</span> Favorites
        </h2>
      </Heading>
      <>
        <NoFavorites>자주 찾는 메모를 즐겨찾기에 추가해보세요!</NoFavorites>
      </>
    </section>
  );
};

const Heading = styled.div`
  border-bottom: 1px solid #212121;
  padding: 1rem 0;
  h2 > span {
    font-size: 1.2rem;
    margin-right: 3px;
  }
`;

const NoFavorites = styled.p`
  text-align: center;
  margin-top: 3rem;
  opacity: 0.6;
`;

export default FavoritesSection;
