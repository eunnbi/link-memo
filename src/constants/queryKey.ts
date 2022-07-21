export const categoriesKey = ["categories"];

export const linkMemoKeys = {
  byCategory: (categoryId: number) => ["linkMemos", categoryId],
  bySearchQuery: (categoryId: number, searchQuery: string) => [
    "linkMemos",
    categoryId,
    searchQuery,
  ],
  like: ["linkMemos", "like"],
};
