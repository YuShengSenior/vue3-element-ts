<!--
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-22 10:18:33
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-22 14:34:20
 * @FilePath: /vue3-ts-element/src/components/Button/index.vue
 * @Description: 按钮组件
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
-->


<script setup lang="ts">

type btnTypes = 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''
type btnSize = 'large' | 'default' | 'small'

withDefaults(defineProps<{
    type: btnTypes,
    link: boolean,
    disabled: boolean,
    loading: boolean,
    size: btnSize
}>(), {
    type: 'primary',
    link: false,
    disabled: false,
    loading: false,
    size: 'large'
})

</script>
<template>
    <el-button :type="type" :link="link" :disabled="disabled" :loading="loading" :size="size">
        <slot />
    </el-button>

</template>


<style scoped>

</style>