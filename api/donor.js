import { API_BASE_URL } from "../services/const";
import axiosInstance from "./index.js";

export const addDonor = async (paylaod) => {
  const res = await axiosInstance.post(`${API_BASE_URL}/donor/`, paylaod);
  return res.data;
};

export const createPayment = async (paylaod) => {
  const res = await axiosInstance.post(
    `${API_BASE_URL}/payments/donation`,
    paylaod
  );
  return res.data;
};

export const addDonarDetails = async (paylaod) => {
  const res = await axiosInstance.post(
    `${API_BASE_URL}/payments/donarDetails`,
    paylaod
  );
  return res.data;
};

export const addMemberCat = async (paylaod) => {
  const res = await axiosInstance.post(
    `${API_BASE_URL}/donor/addMemberCar`,
    paylaod
  );
  return res.data;
};

export const addEmployeeCat = async (paylaod) => {
  const res = await axiosInstance.post(
    `${API_BASE_URL}/meta-data/prefix/${paylaod?.schema_name}`,
    paylaod
  );
  return res.data;
};

export const getEmployeeCat = async (paylaod) => {
  const res = await axiosInstance.get(
    `${API_BASE_URL}/meta-data/prefix/${paylaod?.schema_name}`
  );
  return res.data;
};

export const getMemberCat = async (paylaod) => {
  const res = await axiosInstance.post(
    `${API_BASE_URL}/donor/getMemberCat`,
    paylaod
  );
  return res.data;
};

export const createPayment_ = async (paylaod) => {
  const res = await axiosInstance.post(
    `${API_BASE_URL}/payments/createPayment`,
    paylaod
  );
  return res.data;
};

export const updatePayment = async (paylaod) => {
  const res = await axiosInstance.put(`${API_BASE_URL}/payments/updatePayment/${paylaod.id}`, paylaod);
  return res.data;
};

export const getPayments = async (paylaod) => {
  const res = await axiosInstance.get(
    `${API_BASE_URL}/payments/getPayment/${paylaod}`
  );
  return res.data;
};

export const getDashDonar = async ({ start, end, schema }) => {
  const res = await axiosInstance.post(
    `${API_BASE_URL}/donor/dashDonar/?start=${start}&end=${end}&donar=${1}&schema=${schema}`
  );
  return res.data;
};

export const getDashPayment = async ({ start, end, schema }) => {
  const res = await axiosInstance.post(
    `${API_BASE_URL}/donor/dashDonar/?start=${start}&end=${end}&payment=${1}&schema=${schema}`
  );
  return res.data;
};
