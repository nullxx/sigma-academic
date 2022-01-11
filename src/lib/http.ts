import axios from "axios";
import CredentialsProvider from "./CredentialsProvider";
import { prepareBody } from "./restUtils";
import { objectToParams } from "./utils";

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

instance.interceptors.request.use((config) => {
  const method = config.url?.split("/").pop();
  if (!method) throw new Error("An error has ocurred extracting method");
  config.data = objectToParams(prepareBody(config.data, [], method));
  return config;
});

instance.interceptors.response.use((response) => {
  if (response.data?.token && process.env.INTERCEPT_TOKEN === 'true')
    CredentialsProvider.token = response.data.token;
  return response;
});

export default instance;
