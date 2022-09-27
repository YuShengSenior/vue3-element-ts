import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
import qs from "qs";
import { useLoginStore } from "@/stores/login/store";
import pinia from "@/stores";

const login = useLoginStore(pinia);

interface Iheaders {
  headers: {
    [propName: string]: any;
  };
  [propName: string]: any;
}

type Iconfig = Iheaders & AxiosRequestConfig;

const service = axios.create({
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  withCredentials: false,
  timeout: 30000,
  validateStatus() {
    return true;
  },
  transformResponse: [
    (data) => {
      if (typeof data === "string" && data.startsWith("{")) {
        data = JSON.parse(data);
      }
      return data;
    },
  ],
});

const pending = new Map();

const addPending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data),
  ].join("&");

  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pending.has(url)) {
        pending.set(url, cancel);
      }
    });
};

let isRemove = false;
const removePending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data),
  ].join("&");

  if (pending.has(url)) {
    const cancel = pending.get(url);
    isRemove = true;
    cancel(url);
    pending.delete(url);
  }
};


export const clearPending = () => {
  for (const [url, cancel] of pending) {
    cancel(url);
  }
  pending.clear();
};

service.interceptors.request.use(
  (config: any) => {
    removePending(config);
    addPending(config);
    if (login.loginInfo.token) {
      config.headers.Authorization = login.loginInfo.token;
    }
    return config;
  },
  (error: any) => {
    error.data = {
      message: "服务器异常，请联系管理员！",
    };
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response: AxiosResponse & Iheaders) => {
    removePending(response);
    const responseCode = response.data.code
    if (responseCode !== 200) {
      ElMessage({
        message: response.data.message,
        type: "error",
        showClose: true,
      });
      return Promise.reject(response.data);
    } else {
      if (response.data.code === 200) {
        return response.data;
      } else {
        if (response.config.url) {
          if (response.config.url.indexOf("login") > -1) {
            // TODO： 登录接口处理登录信息
            // store.commit('user/SET_LOGIN_ERR_MSG', response.data.data)
            // store.commit('user/SET_TOKEN', '')
            ElMessage({
              message: response.data.code,
              type: "error",
              showClose: true,
            });
            return response.data;
          } else {
            ElMessage({
              message: response.data.message || "接口错误",
              type: "error",
              showClose: true,
            });
            return response.data;
          }
          throw response;
        }
      }
    }
  },
  (error: any) => {
    if (axios.isCancel(error)) {
      if (isRemove) {
        isRemove = false;
      }
    } else {
      const message = "请求超时或服务器异常，请检查网络或联系管理员！";
      ElMessage({
        message,
        type: "error",
        showClose: true,
      });
    }

    return Promise.reject(error);
  }
);

const showStatus = (status: number) => {
  let message: string;
  switch (status) {
    case 400:
      message = "请求错误(400)";
      break;
    case 401:
      message = "未授权，请重新登录(401)";
      break;
    case 403:
      message = "拒绝访问(403)";
      break;
    case 404:
      message = "请求出错(404)";
      break;
    case 408:
      message = "请求超时(408)";
      break;
    case 500:
      message = "服务器错误(500)";
      break;
    case 501:
      message = "服务未实现(501)";
      break;
    case 502:
      message = "网络错误(502)";
      break;
    case 503:
      message = "服务不可用(503)";
      break;
    case 504:
      message = "网络超时(504)";
      break;
    case 505:
      message = "HTTP版本不受支持(505)";
      break;
    default:
      message = `未知错误!`;
  }
  return message;
};

export default service;
