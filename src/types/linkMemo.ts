import { Category } from "./category";

export interface LinkMemoState {
  linkName: string;
  linkUrl: string;
  content: string;
  category: Category;
}

export interface LinkMemoResponse {
  linkMemoId: number;
  linkName: LinkMemoState["linkName"];
  linkUrl: LinkMemoState["linkUrl"];
  content: LinkMemoState["content"];
  categoryId: Category["categoryId"];
  categoryName: Category["categoryName"];
  like: boolean;
}
