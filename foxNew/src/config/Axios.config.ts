import axios from "axios";


const axiosConfig = {
  withCredentials: true,
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    common: {
      'Accept-Encoding': 'gzip, deflate, compress',
      Accept: ['application/json', 'multipart/form-data'],
    },
  },
};

export const newsApi = axios.create(axiosConfig);