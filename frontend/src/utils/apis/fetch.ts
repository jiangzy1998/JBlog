// 封装自定义 featch 请求
import { fetchAPIURL, fetchAPIV1 } from "../constant";


export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK';


export const fetchAPI = async (url: string, method: Method, params: object) => {
  const hostURL = fetchAPI + fetchAPIV1;
  const requestInit:RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(params)
  }
  return await fetch(hostURL + url, requestInit)
    .then((res) => res.json())
    .catch(() => false);
}
