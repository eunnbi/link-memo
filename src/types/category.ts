export interface Category {
  categoryId: number;
  categoryName: string;
}

export interface CategoryResponse extends Category {
  memoCnt: number;
}

export interface CategoriesGetResponse {
  categories: CategoryResponse[];
}

export type CategoryId = Pick<Category, "categoryId">;
export type CategoryName = Pick<Category, "categoryName">;
