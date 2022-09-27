/*
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-14 09:57:03
 * @LastEditors: YushengSenior Kingsun997@163.com
 * @LastEditTime: 2022-09-21 11:36:01
 * @FilePath: /vue3-ts-element/src/main.ts
 * @Description:
 *
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved.
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import hasPermission from "@/utils/utils";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import pinia from '@/stores'


const app = createApp(App);
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(hasPermission);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
