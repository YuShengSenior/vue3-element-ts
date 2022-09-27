<!--
 * @Description: tag 组件
 * @Author: YushengSenior
 * @Date: 2021-10-28 13:20:47
 * @LastEditTime: 2021-11-23 20:00:55
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
        default: () => 7
    },
    placeholder: {
        type: String,
        default: () => 'pub.placeholder'
    },
    size: {
        type: String,
        default: () => 'medium'
    },
    type: {
        type: String,
        default: () => 'text'
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
    editable: {
        type: Boolean,
        default: () => true
    },
    text: {
        type: String,
        default: () => 'text'
    },
})

</script>

<!-- TODO: placeholder没整  -->
<template>
    <el-col :span="span" class="text-style">
        <el-form-item
            :label="label"
            :prop="name"
            :required="required"
            label-width="150px"
        >
            <el-tag class="tag-item" v-for="(item) in data[name]">{{ item[text] }}</el-tag>
        </el-form-item>
    </el-col>
</template>

<style scoped>
.text-style {
}
.tag-item {
    margin-right: 0.8rem;
}
</style>