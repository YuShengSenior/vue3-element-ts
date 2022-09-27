/*
 * @Author: YushengSenior Kingsun997@163.com
 * @Date: 2022-09-14 17:41:52
 * @LastEditors: YushengSenior Kingsun997@163.com
 * @LastEditTime: 2022-09-21 11:47:42
 * @FilePath: /vue3-ts-element/src/stores/login/store.ts
 * @Description:
 *
 * Copyright (c) 2022 by YushengSenior Kingsun997@163.com, All Rights Reserved.
 */
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { Names } from "../nameSpaace";

export const useLoginStore = defineStore(Names.login, {
  state: () => {
    return {
      count: 0,
      loginInfo: {
        token: ''
      },
    };
  },
  persist: true,
  getters: {},
  actions: {
    setCount() {
      this.count++;
    },
    setLoginInfo(params: any): void {
        console.log(params);
        
      this.loginInfo = params;
    },
    clearLoginInfo(): void {
        this.loginInfo = {
            token: ''
        }
    }
  },
});
