<!--
 * @Description: 按钮域组件
 * @Author: YushengSenior
 * @Date: 2021-11-05 15:28:09
 * @LastEditTime: 2021-11-05 15:30:41
 * @LastEditors: YushengSenior
-->
<script setup lang='ts'>
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits([''])

const props = defineProps<{

}>()
</script>
<template>
    <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">Submit</el-button>
        <el-button @click="resetForm('numberValidateForm')">Reset</el-button>
    </el-form-item>
</template>
