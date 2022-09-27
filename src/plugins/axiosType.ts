/*
 * @Description: axios类型
 * @Author: YushengSenior
 * @Date: 2021-11-03 14:31:39
 * @LastEditTime: 2021-11-22 13:28:22
 * @LastEditors: YushengSenior
 */
import type { AxiosResponse, AxiosRequestConfig } from 'axios';

interface CustomSuccessData<T> {
    code?: number;
    msg?: string;
    message?: string;
    data?: T;
    [keys: string]: any;
}

interface Get {
    <T>(url: string, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>;
}
interface Put {
    <T>(url: string, params?: string | object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>;
}
interface Post {
    <T>(url: string, params?: string | object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>;
}
interface Delete {
    <T>(url: string, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>;
}
interface Update {
    <T>(url: string, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>;
}

// ... delete 等等

export type {CustomSuccessData, Get, Put, Post, Delete, Update}
