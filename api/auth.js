import { API_BASE_URL } from "../services/const";
import axiosInstance from "./index.js";

export const registerNgo = async (paylaod) => {
  const res = await axiosInstance.post(
    `${API_BASE_URL}/auth/ngo-registration`,
    paylaod
  );
  return res.data;
};
export const addEvent = async (paylaod) => {
  const res = await axiosInstance.post(`${API_BASE_URL}/event/`, paylaod);
  return res.data;
};
export const addBlog = async (paylaod) => {
  const res = await axiosInstance.post(`${API_BASE_URL}/blog/`, paylaod);
  return res.data;
};

export const getBlogs = async () => {
  const res = await axiosInstance.get(`${API_BASE_URL}/:website`);
  return res.data;
};


export const updateBlogs = async (data) => {
  const { userId } = data;
  const res = await axiosInstance.put(`${API_BASE_URL}/blog/${userId}`, data);
  return res.data;
};

export const getBlogsAdmin = async (data) => {
  const res = await axiosInstance.get(`${API_BASE_URL}/blog/admin/${data}`);
  return res.data;
};

export const getAllEvent = async (paylaod) => {
  const res = await axiosInstance.get(`${API_BASE_URL}/event/`, paylaod);
  console.log(res, "res.data");
  return res.data;
};

export const registerDonor = async (paylaod) => {
  const res = await axiosInstance.post(`${API_BASE_URL}/auth/donor-registration`, paylaod);
  return res.data;
};

export const login = async (paylaod, _) => {
  const res = await axiosInstance.post(`${API_BASE_URL}/auth/login`, _, {
    auth: {
      username: paylaod.email,
      password: paylaod.password,
    },
  });
  return res.data;
};

export const getUserById = async (data) => {
  const { userId } = data;
  const res = await axiosInstance.get(`${API_BASE_URL}/user/${userId}`);
  return res.data;
};
