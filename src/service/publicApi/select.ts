/*
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-14 14:28:10
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-23 11:51:10
 * @FilePath: /vue3-ts-element/src/service/publicApi/select.ts
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
export const mySelect = async (params: any) => {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved([
        {label: '一', value: 1},
        {label: '二', value: 2},
        {label: '三', value: 3},
        {label: '四', value: 4},
        {label: '五', value: 5},
    ])
    }, 500)
  })
};

export const checkBox = async () => {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved([
        {label: '一', value: 1},
        {label: '二', value: 2},
        {label: '三', value: 3},
        {label: '四', value: 4},
    ])
    }, 500)
  })
};

export const delCustomer = async (params: any) => {
  return await request.Delete(`/api/system/customer/${params}`, params);
};

export const testRequest =async (params:any) => {
  return await request.get('/api/auth/kaptcha/captchaImage')
}
