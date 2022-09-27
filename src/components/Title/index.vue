<!--
 * @Description: 标题组件
 * @Author: YushengSenior
 * @Date: 2021-11-09 10:36:57
 * @LastEditTime: 2021-11-09 11:00:30
 * @LastEditors: YushengSenior
-->

<script setup lang="ts">
defineProps<{
    label: string
}>()
</script>
<template>
    <div class="comp-title-box">
        <span class="comp-title">{{ label }}</span>
    </div>
</template>


<style scoped>
.comp-title-box{
    width: 100%;
    padding: 1.5rem;
}
.comp-title {
    height: 37px;
    font-size: 28px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #000000;
}
</style>
