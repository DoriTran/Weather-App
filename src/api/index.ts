import axios, { InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_OPENWEATHER_API_URL,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.params = {
    ...(config.params || {}),
    appid: process.env.REACT_APP_OPENWEATHER_API_KEY,
  };

  return config;
});
