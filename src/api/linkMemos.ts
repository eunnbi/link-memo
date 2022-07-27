import axios from "axios";
import { getUserId } from "../utils/auth";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BASE_URL = `${BACKEND_URL}/linkMemos`;

export const getLinkMemos = async (
  categoryId: number,
  searchQuery: string | undefined
) => {
  const userId = getUserId();
  const url = `${BASE_URL}?userId=${userId}&categoryId=${categoryId}${
    searchQuery !== "" ? `&searchQuery=${searchQuery}` : ""
  }`;
  const { data } = await axios.get(url);
  return data;
};

export const postLinkMemo = async (
  linkName: string,
  linkUrl: string,
  content: string,
  categoryId: number
) => {
  const userId = getUserId();
  const { data } = await axios.post(`${BASE_URL}/add`, {
    userId,
    linkName,
    linkUrl,
    content,
    categoryId,
  });
  return data;
};

export const patchLinkMemo = async (
  linkName: string,
  linkUrl: string,
  content: string,
  categoryId: number,
  memoId: number
) => {
  const { data } = await axios.patch(`${BASE_URL}/${memoId}`, {
    linkName,
    linkUrl,
    content,
    categoryId,
  });
  return data;
};

export const deleteLinkMemo = async (memoId: number) => {
  const { data } = await axios.delete(`${BASE_URL}/${memoId}`);
  return data;
};

export const getFavoriteLinkMemos = async () => {
  const userId = getUserId();
  const { data } = await axios.get(`${BASE_URL}/like?userId=${userId}`);
  return data;
};

export const putLinkMemoLike = async (value: boolean, memoId: number) => {
  const { data } = await axios.put(`${BASE_URL}/like`, {
    memoId,
    value,
  });
  return data;
};
