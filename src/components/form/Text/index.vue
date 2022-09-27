<!--
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-08-05 10:28:43
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-26 16:37:00
 * @FilePath: /vue3-ts-element/src/components/form/Text/index.vue
 * @Description: 输入框组件
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
-->

<script lang="ts" setup>
import { reactive, inject, ref } from 'vue';
const emit = defineEmits(['blur', 'onChange'])
type Size = "default" | "small" | "large"
type myObject = { [key: string]: any }

const props = withDefaults(defineProps<{
    name: string,
    label?: string
    placeholder?: string,
    size?: Size,
    type?: string,
    required?: boolean,
    span?: number,
    editable?: boolean,
    disabled?: boolean,
    form?: any
}>(), {
    placeholder: '请输入',
    size: 'default',
    type: 'text',
    required: false,
    span: 10,
    disabled: false,
    editable: undefined,
    form: {}
})

// TODO: 配置格栅显示
const layout = reactive({
    lay1: {
        xs: {
            span: 4,
            offset: 1
        },
        sm: {
            span: 4,
            offset: 1
        },
        md: {
            span: 4,
            offset: 1
        },
        lg: {
            span: 4,
            offset: 1
        },
        xl: {
            span: 4,
            offset: 1
        }
    },
    lay2: {
        xs: 8,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 1
    },
    lay3: {
        xs: 8,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 1
    },
})
const data: myObject = inject('data') as myObject


const blur = (item: any) => {
    emit('blur', item)
}

const onChange = (item: any) => {
    emit('onChange', item)
}

let formEditable = inject('editable')

let defaultEditable: { flag: boolean } = reactive({
    flag: true
})

// 模拟Form和Form 内组件的权重 comp > form
if (props.editable === undefined) {
    defaultEditable.flag = formEditable as boolean
} else {
    defaultEditable.flag = props.editable as boolean
}

</script>

<template>
    <el-col :span="props.span" class="text-style">
        <el-form-item :label="props.label" :prop="props.name" :required="props.required" label-width="150px">
            <el-input class="text-input" v-if="defaultEditable.flag" v-model="data[(name) as string]" @blur="blur"
                :type="props.type" :size="props.size" :placeholder="props.placeholder || '请输入'"
                :disabled="props.disabled" :autosize="{ minRows: 3, maxRows: 3 }" />
            <span v-else>{{ data[(name) as string] ?? '暂无数据' }}</span>
        </el-form-item>
    </el-col>
</template>

<style scoped>

</style>