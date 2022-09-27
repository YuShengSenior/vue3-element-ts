<!--
 * @Description: 抽屉组件
 * @Author: YushengSenior
 * @Date: 2021-11-04 20:23:50
 * @LastEditTime: 2021-11-05 15:41:27
 * @LastEditors: YushengSenior
-->
<script setup lang='ts'>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['close'])

const props = defineProps<{
    name: string,
    isShow: boolean,
    title: string,
    direction?: 'rtl' | 'ltr' | 'ttb' | 'btt' 
}>()

// 关闭前执行的方法
const handleClose = ():void => {
    emit('close')
}
</script>
<template>
    <el-drawer
        v-model="props.isShow"
        :title="props.name"
        :direction="props.direction ? props.direction : 'rtl'"
        :before-close="handleClose"
        :destroy-on-close="true"
    >
    <div class="drawer">
    <slot></slot>
    <div class="footer">
        <slot name="fotter"></slot>
    </div>
    </div>
    </el-drawer>
</template>

<style scoped>
.drawer{
    height: 100%;
    position: relative;
}
.footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: end;
}
</style>