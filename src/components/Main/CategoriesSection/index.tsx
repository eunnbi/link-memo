import CategoryItem from "./CategoryItem";
import styled from "styled-components";

const CategoriesSection = () => {
  return (
    <section>
      <Heading>
        <h2>
          <span>📚</span> Categories
        </h2>
      </Heading>
      <div>
        <CategoryItem categoryName="HTML" memoCnt={10} />
        <CategoryItem categoryName="React" memoCnt={10} />
      </div>
    </section>
  );
};

export default CategoriesSection;

const Heading = styled.div`
  border-bottom: 1px solid #212121;
  padding: 1rem;
  h2 > span {
    font-size: 1.2rem;
  }
`;
