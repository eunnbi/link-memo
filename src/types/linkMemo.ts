import { Category } from "./category";

export interface LinkMemoState {
  linkName: string;
  linkUrl: string;
  content: string;
  category: Category;
}

export interface LinkMemoId {
  memoId: number;
}

export interface LinkMemoResponse {
  memoId?: LinkMemoId["memoId"];
  linkName: LinkMemoState["linkName"];
  linkUrl: LinkMemoState["linkUrl"];
  content: LinkMemoState["content"];
  categoryId: Category["categoryId"];
  categoryName?: Category["categoryName"];
  like?: boolean;
}

export interface LinkMemosGetResponse {
  linkMemos: LinkMemoResponse[];
}

export type LinkMemoRequest = LinkMemoResponse;
