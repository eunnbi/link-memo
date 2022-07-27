import axios from "axios";
import { getUserId } from "../utils/auth";

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const getCategories = async () => {
  const userId = getUserId();
  const { data } = await axios.get(
    `${BACKEND_BASE_URL}/categories?userId=${userId}`
  );
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
