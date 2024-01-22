import { AxiosRequestConfig } from "axios";
import appAxios from "./axios";

export const fetcher = (
  url: string,
  config?: {
    baseUrl?: string;
    headers?: AxiosRequestConfig["headers"];
  }
) => {
  if (config?.baseUrl) {
    appAxios.defaults.baseURL = config?.baseUrl;
  }
  return appAxios
    .get(url, { headers: config?.headers })
    .then((res) => res.data);
};
