/*
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-14 09:57:03
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-27 11:53:49
 * @FilePath: /vue3-ts-element/src/router/index.ts
 * @Description: 路由信息
 *
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved.
 */
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { clearPending } from "@/plugins/axios";
import config from "../../config/config";
import pinia from "@/stores";
import { useLoginStore } from "@/stores/login/store";

const login = useLoginStore(pinia);

interface childrenSeeting {
  hiddenInMenu?: boolean;
  children?: Array<childrenSeeting & RouteRecordRaw>;
}

interface RouteMySeeting {
  hiddenInMenu?: boolean;
  children?: Array<childrenSeeting & RouteRecordRaw>;
}

const routes: Array<RouteRecordRaw & RouteMySeeting> = [
  {
    path: "/login",
    name: "登录",
    hiddenInMenu: true,
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    redirect: "/home",
    hiddenInMenu: true,
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "首页",
        hiddenInMenu: true,
        // component: () => import('@/views/home/index.vue')
        component: () => import("@/views/Demo/index.vue"),
      },
    ],
  },
  {
    path: "/basic",
    name: "基本信息",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/basic/test1",
        name: "测试1",
        component: () => import("@/views/basic/myTest/index.vue"),
      },
      {
        path: "/basic/test1/:id/:type",
        name: "测试1详情",
        hiddenInMenu: true,
        component: () => import("@/views/basic/myTest/detail/index.vue"),
      },
      {
        path: "/basic/test2",
        name: "测试2",
        component: () => import("@/views/basic/myTest2/index.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    hiddenInMenu: true,
    component: () => import("@/views/404/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  console.log(to, '---');
  
  clearPending();
  if (!login.loginInfo.token) {
    window.document.title = `${config.plantformName} - ${to.name}`
    next();
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
});

export default router;
