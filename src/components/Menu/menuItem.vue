<!--
 * @Description: 菜单栏下的递归组件
 * @Author: YushengSenior
 * @Date: 2021-11-02 09:42:40
 * @LastEditTime: 2022-09-16 14:23:11
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script lang="ts" setup>
import type LocalRoute  from '@/layout/layout';
const props = defineProps<{
    readonly data: LocalRoute,
}>()
</script>

<template>
        <template v-for="(item, index) in props.data" :key="item.path">
            <el-sub-menu
                :index="item.path"
                v-if="item.children && item.children.length > 0"
                class="m-normal"
            >
                <template #title>{{ item.name }}</template>
                <menu-item class="el-menu-item" :data="item.children" />
            </el-sub-menu>
            <el-menu-item class="el-menu-item" v-else :index="item.path" v-if="!item.hiddenInMenu">
                <span>{{ item.name }}</span>
            </el-menu-item>
        </template>
</template>
<style scoped>
.el-menu-item{
    /* padding: 0 8px !important; */
    user-select: none;
}
.is-active, .el-menu-item, .is-active{
    border-radius: 2px;
}
</style>