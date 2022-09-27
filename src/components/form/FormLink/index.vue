<!--
 * @Description: 输入框组件
 * @Author: YushengSenior
 * @Date: 2021-10-28 13:20:47
 * @LastEditTime: 2021-11-24 15:03:55
 * @LastEditors: YushengSenior
-->
<script lang="ts" setup>
const { t } = useI18n();

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
    }
})


</script>

<!-- TODO: placeholder没整  -->
<template>
    <el-col :span="span" class="text-style">
        <el-form-item
            :label="label ? t(`input.${id}`) : ''"
            :prop="name"
            label-width="150px"
        >
            <slot></slot>
           
        </el-form-item>
    </el-col>
</template>
