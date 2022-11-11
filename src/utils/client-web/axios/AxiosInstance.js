/* Check import */

import Axios from "axios";
import redisClient from "../../../middlewares/RedisConnection";
import { BaseUrl } from "./BaseUrl";

export const AxiosInstance = () => {
  const axios = Axios.create({
    // baseURL: BaseUrl.Main,
    baseURL: BaseUrl.Main,
  });
  axios.interceptors.request.use(
    async (config) => {
      const token = await redisClient.runClientGet('token')
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      config.headers["Accept"] = "application/json";
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      // block to handle success case
      return response;
    },
    (error) => {
      // block to handle error case
      return Promise.reject(error);
    }
  );
  return axios;
};
