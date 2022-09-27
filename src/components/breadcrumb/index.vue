<!--
 * @Description: 面包屑
 * @Author: YushengSenior
 * @Date: 2021-10-28 15:36:52
 * @LastEditTime: 2022-09-22 10:55:56
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script setup lang="ts">
import { useRouter, useRoute, type RouteLocationMatched } from 'vue-router'
import { watch, type Ref, ref } from 'vue';
const route = useRoute()

const breadcrumbs: Ref<RouteLocationMatched[]> = ref([])

const getBreadcrumb = () => {
    breadcrumbs.value = route.matched
}
getBreadcrumb()

watch(() => route.path, () => getBreadcrumb())
</script>
<template>
    <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item v-for="item in breadcrumbs">{{ item.name as string }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<style scoped>
.breadcrumb {
    background-color: #ffffff;
    height: 56px;
    padding-left: 24px;
    line-height: 56px;
    margin-top: 16px;
    margin-bottom: 16px;
}
</style>
