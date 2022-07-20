import axios from "axios";
import { getUserId } from "../utils/auth";

export const getCategories = async () => {
  const userId = getUserId();
  const { data } = await axios.get(`/categories?userId=${userId}`);
  return data;
};

export const postCategory = async (categoryName: string) => {
  const userId = getUserId();
  const { data } = await axios.post("/categories", {
    userId,
    categoryName,
  });
  return data;
};

export const patchCategory = async (
  categoryName: string,
  categoryId: number
) => {
  const { data } = await axios.patch(`/categories/${categoryId}`, {
    categoryName,
  });
  return data;
};

export const deleteCategory = async (categoryId: number) => {
  const { data } = await axios.delete(`/categories/${categoryId}`);
  return data;
};
