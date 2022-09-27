<!--
 * @Description: 封装菜单栏
 * @Author: YushengSenior
 * @Date: 2021-11-01 17:12:47
 * @LastEditTime: 2022-09-16 11:31:45
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import type { LocalRoute } from '@/layout/layout';
import MenuItem from './menuItem.vue'

const props = withDefaults(defineProps<{
    readonly menuHeaderData: LocalRoute,
    readonly horizontal?: string
}>(), {
    horizontal: 'horizontal'
})

const route = useRoute()


const handleOpen = (key: string | number, keyPath: Array<string>) => {
    console.log(key, keyPath)
}
const handleClose = (key: string | number, keyPath: Array<string>) => {
    console.log(key, keyPath)
}

const currentPath = computed(() => {
    const { path } = route
    return path
})

</script>
<template>
    <el-menu background-color="#171818" text-color="#ffffff" active-text-color="#F86A2B" :horizontal="horizontal"
        class="m-normal menu-box" @open="handleOpen" @close="handleClose" router :default-active="currentPath">
        <MenuItem :data="props.menuHeaderData" />
    </el-menu>
</template>
<style scoped>
.menu-box {
    /* padding: 0 1rem; */
}
</style>
