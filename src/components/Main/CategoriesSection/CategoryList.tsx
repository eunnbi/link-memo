import { useFetchCategories } from "../../../hooks/useFetchCategories";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { useState } from "react";
import DeleteAlert from "./DeleteAlert";
import EditAlert from "./EditAlert";

const CategoryList = () => {
  const { data, status } = useFetchCategories();
  const [deleteCategoryId, setDeleteCategoryId] = useState(0);
  const [editCategory, setEditCategory] = useState({
    categoryId: 0,
    categoryName: "",
  });

  return data?.categories.length === 0 ? (
    <NoCategories>
      아래 (+) 버튼을 눌러 링크 메모를 보관할 나만의 카테고리를 만들어 보세요!
    </NoCategories>
  ) : (
    <>
      <ul>
        {data?.categories.map((category) => (
          <CategoryItem
            key={category.categoryId}
            category={category}
            clickEditMenu={() =>
              setEditCategory({
                categoryId: category.categoryId,
                categoryName: category.categoryName,
              })
            }
            clickRemoveMenu={() => setDeleteCategoryId(category.categoryId)}
          />
        ))}
      </ul>
      <DeleteAlert
        categoryId={deleteCategoryId}
        setCategoryId={setDeleteCategoryId}
      />
      <EditAlert category={editCategory} setCategory={setEditCategory} />
    </>
  );
};

export default CategoryList;

const NoCategories = styled.p`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;
