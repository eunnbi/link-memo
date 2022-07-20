import { Category } from "./category";

export interface LinkMemoState {
  linkName: string;
  linkUrl: string;
  content: string;
  category: Category;
  like?: boolean;
}
