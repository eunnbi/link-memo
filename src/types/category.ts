export interface Category {
  categoryId: number;
  categoryName: string;
  memoCnt?: number;
}

export interface CategoriesGetResponse {
  categories: Category[];
}

export interface CategoryId {
  categoryId: Category["categoryId"];
}

export interface CategoryName {
  categoryName: Category["categoryName"];
}
