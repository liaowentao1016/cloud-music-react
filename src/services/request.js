import axios from "axios";

import { message } from "antd";

// 创建axios实例
const request = axios.create({
  baseURL: "http://123.207.32.32:9001",
  timeout: 5000
});

// 请求拦截器

// 响应拦截器
request.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          message.error("请求错误");
          break;
        case 401:
          message.error("未授权访问");
          break;
        default:
          message.error("未知错误信息");
      }
    }
  }
);
export default request;
