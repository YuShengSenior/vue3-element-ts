<!--
 * @Description: 气泡确认框
 * @Author: YushengSenior
 * @Date: 2021-11-05 16:22:34
 * @LastEditTime: 2022-09-16 13:51:59
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script setup lang='ts'>
import { defineProps, defineEmits } from 'vue'
// import { InfoFilled } from '@element-plus/icons'

const { t } = useI18n();

const emit = defineEmits(['confirm', 'cancel'])

// 点击确认按钮
const handleConfirm = (): void => {
  emit('confirm')
}

// 点击取消按钮
const handleCancel = (): void => {
  emit('cancel')
}

const props = defineProps<{
  title: string,
  buttonName: string
}>()
</script>
<template>
  <el-popconfirm
    :confirm-button-text="t('pub.yes')"
    :cancel-button-text="t('pub.no')"
    :title="props.title"
    :icon-color="red"
    @confirm="handleConfirm"
    @cancel="handleCancel"
  >
    <template #reference>
        <el-button type="text">{{buttonName}}</el-button>
    </template>
  </el-popconfirm>
</template>
