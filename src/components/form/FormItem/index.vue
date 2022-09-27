<!--
 * @Description: FormItem
 * @Author: YushengSenior
 * @Date: 2021-10-28 13:20:47
 * @LastEditTime: 2021-11-11 17:29:12
 * @LastEditors: YushengSenior
-->
<script lang="ts" setup>
import { reactive } from 'vue';

defineProps({
    name: {
        type: String,
    },
    id: {
        type: String,
    },
    label: {
        type: String,
    },
    span: {
        type: Number,
        default: () => 6
    },
    required: {
        type: Boolean,
        default: () => false
    },
    data: {
        type: Object,
        default() {
            return {}
        }
    },
})
</script>

<template>
    <el-col :span="span" class="text-style">
        <el-form-item
            label="占位符"
            :prop="name"
            :required="required"
            label-width="150px"
        >
        <slot></slot>
        </el-form-item>
    </el-col>
</template>

<style scoped>
.text-style {
    margin-right: 1.5rem;
}
</style>