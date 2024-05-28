import { API_BASE_URL } from "../services/const";
import axiosInstance from "./index.js";

export const getMetaData = async (data) => {
  const res = await axiosInstance.get(`${API_BASE_URL}/meta-data/${data}`);
  return res.data;
};

export const addMetaData = async (data) => {
  const res = await axiosInstance.post(`${API_BASE_URL}/meta-data/`, data);
  return res.data;
};

export const updateMetaData = async ({ id, data }) => {
  const res = await axiosInstance.put(`${API_BASE_URL}/meta-data/${id}`, data);
  return res.data;
};

export const fileUpload = async (data) => {
  const res = await axiosInstance.post(`${API_BASE_URL}/meta-data/fileUpload`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const getDashMeta = async (id) => {
  const res = await axiosInstance.get(`${API_BASE_URL}/meta-data/dashboard/${id}`);
  return res.data;
};

export const getDashMembers = async (id) => {
  const res = await axiosInstance.get(`${API_BASE_URL}/dashboard/${id}`);
  return res.data;
};
