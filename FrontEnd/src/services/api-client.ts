import axios, { AxiosRequestConfig } from 'axios';

export interface FetchData<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '11536f937fea4f12bc71e054741f18da',
  },
});

export default class ApiClient<T> {
  endPoint;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getData = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchData<T>>(this.endPoint, config)
      .then((res) => res.data);

  getGameDetail = (config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(this.endPoint, config).then((res) => res.data);
}
