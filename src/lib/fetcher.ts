// import { AxiosRequestConfig } from "axios";
// import appAxios from "./axios";

// export const fetcher = (
//   url: string,
//   config?: {
//     baseUrl?: string;
//     headers?: AxiosRequestConfig["headers"];
//   }
// ) => {
//   if (config?.baseUrl) {
//     appAxios.defaults.baseURL = config?.baseUrl;
//   }
//   return appAxios
//     .get(url, { headers: config?.headers })
//     .then((res) => res.data);
// };

import { AxiosRequestConfig } from "axios";
import appAxios from "./axios";
interface RequestConfig extends AxiosRequestConfig {
  apikey?: string;
}

export const fetcher = (
  url: string,
  config?: {
    baseUrl?: string;
    headers?: AxiosRequestConfig["headers"];
    apikey?: string;
  }
) => {
  const axiosConfig: RequestConfig = {
    headers: {
      ...config?.headers
    }
  };

  if (config?.baseUrl) {
    axiosConfig.baseURL = config.baseUrl;
  }

  if (config?.apikey && !config.baseUrl) {
    axiosConfig.headers = {
      ...axiosConfig.headers,
      apikey: config.apikey
    };
  }

  return appAxios
    .get(url, axiosConfig)
    .then((res) => res.data)
    .catch((error) => {
      console.log("error", error);
      throw error; // Re-throw the error to handle it in the calling code
    });
};
