import { API_BASE_URL } from "../services/const";
import axiosInstance from "./index.js";

export const addMember = async (paylaod) => {
  const res = await axiosInstance.post(`${API_BASE_URL}/ngo/users`, paylaod);
  return res.data;
};

export const getMembers = async () => {
  const res = await axiosInstance.get(`${API_BASE_URL}/ngo/users`);
  return res.data;
};

export const updateMember = async (data) => {
  const { userId } = data;
  const res = await axiosInstance.put(`${API_BASE_URL}/ngo/users/${userId}`, data);
  return res.data;
};

export const getPrefix = async (data) => {
  const res = await axiosInstance.get(`${API_BASE_URL}/meta-data/prefix/${data}`);
  return res.data;
};