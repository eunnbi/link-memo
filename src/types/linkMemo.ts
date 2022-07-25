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

export type LinkMemoResponse = LinkMemoId &
  Category &
  Pick<LinkMemoState, "linkName" | "linkUrl" | "content"> & { like: boolean };

export interface LinkMemosGetResponse {
  linkMemos: LinkMemoResponse[];
  message?: string;
}

export type LinkMemoPostRequest = Pick<
  LinkMemoResponse,
  "linkName" | "linkUrl" | "content" | "categoryId" | "categoryName"
>;

export type LinkMemoPatchRequest = LinkMemoPostRequest & LinkMemoId;

export interface LinkMemoLikeRequest extends LinkMemoId {
  value: boolean;
}

export type LinkMemoShare = Pick<LinkMemoState, "linkName" | "linkUrl">;
