import axios from "axios";
import { getUserId } from "../utils/auth";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BASE_URL = `${BACKEND_URL}/categories`;

export const getCategories = async () => {
  const userId = getUserId();
  const { data } = await axios.get(`${BASE_URL}?userId=${userId}`);
  return data;
};

export const postCategory = async (categoryName: string) => {
  const userId = getUserId();
  const { data } = await axios.post(BASE_URL, {
    userId,
    categoryName,
  });
  return data;
};

export const patchCategory = async (
  categoryName: string,
  categoryId: number
) => {
  const { data } = await axios.patch(`${BASE_URL}/${categoryId}`, {
    categoryName,
  });
  return data;
};

export const deleteCategory = async (categoryId: number) => {
  const { data } = await axios.delete(`${BASE_URL}/${categoryId}`);
  return data;
};
