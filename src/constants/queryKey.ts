export const categoriesKey = ["categories"];

export const linkMemoKeys = {
  byCategory: (categoryId: number) => ["linkMemos", categoryId],
  search: ["linkMemos", "search"],
  like: ["linkMemos", "like"],
};
