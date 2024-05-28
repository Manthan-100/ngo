import { API_BASE_URL } from "../services/const";
import axiosInstance from "./index"

export const getNgo = async () => {
  const res = await axiosInstance.get(`${API_BASE_URL}/ngo`);
  return res.data;
};
