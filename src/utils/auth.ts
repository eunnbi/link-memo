const USER = "user" as const;

export const getUserId = (): null | number => {
  const value = localStorage.getItem(USER);
  return value === null ? null : JSON.parse(value);
};

export const storeUserId = (userId: number) => {
  localStorage.setItem(USER, JSON.stringify(userId));
};

export const removeUserId = () => {
  localStorage.removeItem(USER);
};
