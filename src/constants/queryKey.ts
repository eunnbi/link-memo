export const categoriesKey = ["categories"];

export const linkMemoKeys = {
  filter: (categoryId: number, searchQuery: string) => [
    "linkMemos",
    categoryId,
    searchQuery,
  ],
  like: ["linkMemos", "like"],
};
