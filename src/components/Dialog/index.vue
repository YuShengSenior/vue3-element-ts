<!--
 * @Description: 弹出确认框
 * @Author: YushengSenior
 * @Date: 2021-11-04 09:53:48
 * @LastEditTime: 2022-09-23 17:20:13
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['confirm', 'cancel'])

const props = withDefaults(defineProps<{
    isShow: boolean,
    title?: string,
    saveLoading?: boolean,
    data?: any,
    width?: string | number,
    confirm?: string
}>(), {

})

// TODO: 关闭的时候要销毁数据,避免数据残留
const handleCancel = (): void => {
    const { data } = props
    Object.keys(data || {}).forEach(key => (data[key] = ''))
    if(!props.saveLoading) {
        emit('cancel')
    }
}

const handleConfirm = (): void => {
    emit('confirm')
}

</script>

<template>
    <el-dialog v-model="props.isShow" :width="props.width || '40%'" destroy-on-close modal lock-scroll
        :show-close="!props.saveLoading" :close-on-click-modal="!props.saveLoading" @close="handleCancel"
        class="dialog-box">
        <template #header="{ titleId, titleClass }">
            <div class="my-header">
                    <p class="title-style" :id="titleId" :class="titleClass">{{ props.title }}</p>
                <el-divider />
            </div>
        </template>
        <slot></slot>
        <template #footer>
            <div class="dialog-footer">
                <el-button v-if="!props.saveLoading" @click="handleCancel">取消</el-button>
                <el-button type="primary" @click="handleConfirm" :loading="props.saveLoading">{{ props.confirm || '确定'
                }}</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<style scoped>
.dialog-footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
}

.title-style {
    font-size: 18px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #000000;
}
.title-style::before{
    display: block;
    content: ' ';
    background-color: #F86A2B;
}
</style>