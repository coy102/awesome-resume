import axios, { AxiosResponse } from 'axios';
const BASE_URL = 'https://pokeapi.co/api/v2';

type ApiRequest = (
  url: string,
  payload?: object
) => Promise<AxiosResponse<any>>;

export class Api {
  axios: {
    get: ApiRequest;
    post: ApiRequest;
    put: ApiRequest;
    delete: ApiRequest;
  };

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      },
      timeout: 60 * 1000
    });
  }

  get = async (url: string, payload?: object) => {
    const res = await this.handleResponse(this.axios.get, { url, payload });
    return res;
  };

  put = async (url: string, payload?: object) => {
    const res = await this.handleResponse(this.axios.put, { url, payload });
    return res;
  };

  post = async (url: string, payload?: object) => {
    const res = await this.handleResponse(this.axios.post, {
      url,
      payload
    });
    return res;
  };

  delete = async (url: string, payload?: object) => {
    const res = await this.handleResponse(this.axios.delete, {
      url,
      payload
    });
    return res;
  };

  handleResponse = async (
    apiRequest: ApiRequest,
    params: any
  ): Promise<AxiosResponse<any>> => {
    const res = await apiRequest(params.url, params.payload);
    return res;
  };
}
