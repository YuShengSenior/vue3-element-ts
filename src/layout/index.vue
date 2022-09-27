<!--
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-14 13:43:50
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-23 16:38:14
 * @FilePath: /vue3-ts-element/src/layout/index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
-->
<script setup lang="ts">
import Menu from '@/components/Menu/index.vue'
import Header from '@/components/Header/index.vue'
import { Breadcrumb } from '@/components/index'
// 统一设置 是否使用服务器菜单
import router from '@/router/index';
import config from '../../config/config'
import service from '@/service/index'
import { reactive } from 'vue';
import { useRoute, type RouteRecordRaw } from 'vue-router'
import type { LocalRoute } from '@/layout/layout';

const route = useRoute()

const routeData: LocalRoute = reactive(router.options.routes.filter((i: RouteRecordRaw) => !i.hiddenInMenu))

if (config.serverMenu) {
    service.system.getServerMenu({})
} else {

}

</script>

<template>
        <el-container class="container" direction="vertical">
                <Header class="header"/>
                <el-container class="sec_container">
                <Menu class="menu" :menuHeaderData="routeData" />
                    <el-main class="main_container">
                        <Breadcrumb />
                        <router-view></router-view>
                    </el-main>
                </el-container>
        </el-container>
</template>

<style>
@import url(../assets/main.css);
</style>