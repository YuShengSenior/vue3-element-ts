<!--
 * @Description: 封装页面容器组件
 * @Author: YushengSenior
 * @Date: 2021-11-02 14:28:37
 * @LastEditTime: 2022-09-22 15:17:35
 * @LastEditors: 余笙学长 kingsun997@163.com
-->

<script setup lang="ts">


withDefaults(defineProps<{
    title?: string,
    footer?: boolean,
}>(), {

})
</script>


<template>
    <el-card class="box-card" id="page-box">
        <template #header v-if="title">
            <div class="card-header">
                <span class="card-hearder-text">{{ title }}</span>
            </div>
        </template>
        <slot />
        <el-divider v-if="footer" />
        <div class="page-card-footer-box" v-if="footer">
            <div class="page-card-footer">
                <slot name="footer" />
            </div>
        </div>
    </el-card>
</template>

<style scoped>
.page-card-footer {
    margin-right: 188px;
}

.card-hearder-text {
    font-size: 18px;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: left;
    color: #333333;
}

.box-card {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
}

.page-card-footer-box {
    height: 4rem;
    line-height: 4rem;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-right: 11.75rem;
}

.el-card__body {
    padding: 1.5rem 3.25rem !important;
    height: auto;
    overflow-y: scroll;
}
</style>