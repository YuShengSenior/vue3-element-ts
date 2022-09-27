<!--
 * @Description: 页面hearder栏
 * @Author: YushengSenior
 * @Date: 2021-10-29 16:45:04
 * @LastEditTime: 2022-09-23 16:41:44
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script setup lang="ts">
// import Notice from '@/components/Notice/index.vue'
import User from "../User/index.vue";
import logo from '@/assets/logo.png'
import config from '../../../config/config'
import { useRouter } from "vue-router";
const router = useRouter()

const handleGoPage = () => {
        router.push(config.logoPath)
}

</script>
<template>
        <el-header class="header">
                <div class="head">
                        <div class="g-head">
                                <div class="m-logo-box" @click="handleGoPage">
                                        <img v-if="config.logoType !== 'text'" :src="logo" class="m-logo" alt="logo" />
                                        <span v-else class="logoText">{{ config.logoText }}</span>
                                </div>
                        </div>
                        <div class="rightOperationArea">
                                <!-- <Notice /> -->
                                <User />
                        </div>
                </div>

        </el-header>
</template>
<style scoped>
.head {
        height: 64px;
        display: flex;
        overflow: hidden;
        justify-content: space-between;
}

.g-head {
        width: 272px;
}

.rightOperationArea {}

.header {}

.m-width {
        width: 17rem;
}

.m-logo-box {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        height: 100%;
        cursor: pointer;
        user-select: none;
}

.m-logo {
        width: 9.5rem;
        height: 2.4375rem;
        line-height: 2.4375rem;
}

.m-normal {
        width: 100%;
        text-align: center;
}

.m-menu {
        text-align: center;
        overflow-y: scroll;
        scrollbar-width: none;
        /* firefox */
        -ms-overflow-style: none;
        /* IE 10+ */
        overflow-x: hidden;
        overflow-y: auto;
}

.m-menu::-webkit-scrollbar {
        display: none;
        /* Chrome Safari */
}

.b-text {
        font-size: 14px;
        font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        text-align: left;
        color: #999999;
}
</style>
