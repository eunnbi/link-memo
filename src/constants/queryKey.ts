export const categoriesKey = ['categories'];

export const bookmarkKeys = {
  all: ['bookmarks', 0],
  byCategory: (categoryId: number) => ['bookmarks', categoryId],
  search: ['bookmarks', 'search'],
};
