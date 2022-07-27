import { useFetchCategories } from "../../../hooks/useFetchCategories";
import CategoryItem from "../CategoryItem";
import styled from "styled-components";

const CategoryList = () => {
  const { data, status } = useFetchCategories();

  return status === "loading" ? (
    <Text>Loading...</Text>
  ) : data?.categories.length === 0 ? (
    <Text>
      아래 (+) 버튼을 눌러 링크 메모를 보관할 나만의 카테고리를 만들어 보세요!
    </Text>
  ) : (
    <>
      <ul>
        {data?.categories.map((category) => (
          <CategoryItem key={category.categoryId} category={category} />
        ))}
      </ul>
    </>
  );
};

export default CategoryList;

const Text = styled.p`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  margin-top: 3rem;
`;
