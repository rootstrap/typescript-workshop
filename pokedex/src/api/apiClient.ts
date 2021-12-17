import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

const APPLICATION_JSON = "application/json";
const CONTENT_TYPE = "Content-Type";

const client = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
});

const applyInterceptors = (client: AxiosInstance): void => {
  client.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
      const { data } = config;
      config.data = data ? decamelizeKeys(data) : {};
      return config;
    }
  );

  client.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
    const { data } = response;
    response.data = data ? camelizeKeys(data) : {};
    return response;
  });
};

applyInterceptors(client);

export default client;
