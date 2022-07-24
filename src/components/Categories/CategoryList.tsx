import { useFetchCategories } from "../../hooks/useFetchCategories";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { useState } from "react";
import DeleteAlert from "./DeleteAlert";
import EditAlert from "./EditAlert";
import { Category, CategoryId } from "../../types/category";

const CategoryList = () => {
  const { data, status } = useFetchCategories();
  const [deleteCategory, setDeleteCategory] = useState<CategoryId>({
    categoryId: 0,
  });
  const [editCategory, setEditCategory] = useState<Category>({
    categoryId: 0,
    categoryName: "",
  });

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
          <CategoryItem
            key={category.categoryId}
            category={category}
            clickEditMenu={() =>
              setEditCategory({
                categoryId: category.categoryId,
                categoryName: category.categoryName,
              })
            }
            clickRemoveMenu={() =>
              setDeleteCategory({ categoryId: category.categoryId })
            }
          />
        ))}
      </ul>
      <DeleteAlert category={deleteCategory} setCategory={setDeleteCategory} />
      <EditAlert category={editCategory} setCategory={setEditCategory} />
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
`;
