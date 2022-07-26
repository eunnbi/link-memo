import axios from "axios";
import { getUserId } from "../utils/auth";

export const getLinkMemos = async (
  categoryId: number,
  searchQuery: string | undefined
) => {
  const userId = getUserId();
  const url = `/linkMemos?userId=${userId}&categoryId=${categoryId}${
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
  const { data } = await axios.post("/linkMemos", {
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
  const { data } = await axios.patch(`/linkMemos/${memoId}`, {
    linkName,
    linkUrl,
    content,
    categoryId,
  });
  return data;
};

export const deleteLinkMemo = async (memoId: number) => {
  const { data } = await axios.delete(`/linkMemos/${memoId}`);
  return data;
};

export const getFavoriteLinkMemos = async () => {
  const userId = getUserId();
  const { data } = await axios.get(`/linkMemos/like?userId=${userId}`);
  return data;
};

export const putLinkMemoLike = async (value: boolean, memoId: number) => {
  const { data } = await axios.put("/linkMemos/like", {
    memoId,
    value,
  });
  return data;
};
