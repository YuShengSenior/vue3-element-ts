/*
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-14 14:28:10
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-23 17:15:35
 * @FilePath: /vue3-ts-element/src/service/publicApi/index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
 */
import request from "@/utils/request";
import qs from "qs";

/**
 * 获取服务器端菜单信息
 * @param params 
 * @returns 
 */
export const getServerMenu = async (params: any) => {
  return await request.get(
    `/api/system/customer/list?${qs.stringify(params)}`
  );
};

// 退出登录
export const logout = async () => {
  return await request.post("/api/system/customer");
};

// 登录
export const login = async (payload: any) => {
  return await request.post("/api/auth/api/v1/employees/login", payload);
};

// 修改密码
export const changePassword = async (params: any) => {
  return await request.Delete(`/api/system/customer/${params}`, params);
};

export const testRequest =async (params:any) => {
  return await request.get('/api/auth/kaptcha/captchaImage')
}
