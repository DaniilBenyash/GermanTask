import axios, { AxiosError } from "axios";

type ErrorResponseData = {
  Message: string;
};

const BASE_URL = "http://localhost:8022";

export const createAPI = (path: string) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL + path,
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorResponseData>) => {
      if (!error.response) {
        throw new Error("Network error");
      }

      console.log(error);

      throw error;
    },
  );

  return axiosInstance;
};
