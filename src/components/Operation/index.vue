<!--
 * @Description: table 操作容器组件
 * @Author: YushengSenior
 * @Date: 2021-11-02 20:40:23
 * @LastEditTime: 2022-09-22 17:07:54
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script lang="ts" setup>
withDefaults(defineProps<{
    width: string | number,
    label:string
}>(),{
    label: '操作'
})
</script>

<template>
    <el-table-column
        fixed="right"
        align="center"
        :label="label"
        :width="width ? width : '200'"
    >
        <template #default="scope">
            <slot :item="scope" />
        </template>
    </el-table-column>
</template>