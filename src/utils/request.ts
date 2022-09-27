/*
 * @Description: 封装请求
 * @Author: YushengSenior
 * @Date: 2021-11-03 14:13:17
 * @LastEditTime: 2021-11-24 10:15:36
 * @LastEditors: YushengSenior
 * @Reference:
 */
import service from '@/plugins/axios'
import type {Delete, Get, Post, Put, Update} from '@/plugins/axiosType'; // 接口泛型

// GET 请求
const get: Get = async (url, config) => {
    return await service.get(url, {...config});
};

// PUT 请求
const put: Put = async (url, params, config) => {
    return await service.put(url, params, {...config});
};

// POST 请求
const post: Post = async (url, params, config) => {
    return await service.post(url, params, {...config});
};

// POST 请求
const Delete: Delete = async (url, config) => {
    return await service.delete(url, {...config});
};


// UPDATE 请求
const update: Update = async (url, config) => {
    return await service.delete(url, {...config});
};




// 使用 request 统一调用
const request = {
    get,
    put,
    post,
    Delete,
    update
};

export default request;
