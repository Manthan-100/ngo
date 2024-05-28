import { API_BASE_URL } from "../services/const";
import axiosInstance from "./index"

export const getDonor = async () => {
  const res = await axiosInstance.get(`${API_BASE_URL}/donor/`);
  return res.data;
};

export const getDonorByNo = async (no) => {
  const res = await axiosInstance.get(`${API_BASE_URL}/donor/number/${no}`);
  return res.data;
};

export const updateDonor = async (id, updatedData) => {
  const res = await axiosInstance.put(`${API_BASE_URL}/donor/${id}`, updatedData);
  return res.data;
};
