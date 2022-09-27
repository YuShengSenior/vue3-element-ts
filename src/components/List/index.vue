<!--
 * @Description: 列表
 * @Author: YushengSenior
 * @Date: 2021-11-05 17:45:50
 * @LastEditTime: 2021-11-05 18:35:08
 * @LastEditors: YushengSenior
-->

<script setup lang='ts'>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits([''])


const handleOpen = (key: string, keyPath: any) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: any) => {
    console.log(key, keyPath)
}
</script>
<template>
      <h1>Default colors</h1>
    <el-menu
        default-active="1-2"
        @open="handleOpen"
        @close="handleClose"
    >
            <el-menu-item-group>
                <el-menu-item index="1-1">item one</el-menu-item>
            </el-menu-item-group>
    </el-menu>
</template>
