import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BASE_URL = `${BACKEND_URL}/auth`;

export const getIsIdDuplicate = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/duplicate?user=${id}`);
  return data;
};

export const register = async (user: string, passwd: string) => {
  const { data } = await axios.post(`${BASE_URL}/register`, {
    user,
    passwd,
  });
  return data;
};

export const login = async (user: string, passwd: string) => {
  const { data } = await axios.post(`${BASE_URL}/login`, {
    user,
    passwd,
  });
  return data;
};
