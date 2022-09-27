<!--
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-14 09:57:03
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-15 17:09:43
 * @FilePath: /vue3-ts-element/src/App.vue
 * @Description: 主页面
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import {ref,reactive, type Ref} from "vue";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

interface IBtnFlag {
  autoInsertSpace: boolean
}

const size: Ref <'large' | 'default' | 'small'> = ref('default')
const zIndex: Ref<number> = ref(3000)
const btnFlag: IBtnFlag = reactive({
  autoInsertSpace: true,
})
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex" :button="btnFlag" :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>

<style>
  
</style>
