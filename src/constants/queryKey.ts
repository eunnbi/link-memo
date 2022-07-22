export const categoriesKey = ["categories"] as const;

export const linkMemoKeys = {
  all: ["linkMemos"],
  filter: (categoryId: number, searchQuery: string) =>
    ["linkMemos", categoryId, searchQuery] as const,
  like: ["linkMemos", "like"] as const,
};
