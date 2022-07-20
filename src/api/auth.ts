import axios from "axios";

export const getIsIdDuplicate = async (id: string) => {
  const { data } = await axios.get(`/auth/duplicate?user=${id}`);
  return data;
};

export const register = async (user: string, passwd: string) => {
  const { data } = await axios.post(`/auth/register`, {
    user,
    passwd,
  });
  return data;
};

export const login = async (user: string, passwd: string) => {
  const { data } = await axios.post(`/auth/login`, {
    user,
    passwd,
  });
  return data;
};
