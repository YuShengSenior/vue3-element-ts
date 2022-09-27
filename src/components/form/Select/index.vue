<!--
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-08-05 10:28:43
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-26 14:12:22
 * @FilePath: /vue3-ts-element/src/components/form/Select/index.vue
 * @Description: 下拉组件
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
-->
<script lang="ts" setup>
import service from '@/service';
import { reactive, inject, defineEmits, watch, ref } from 'vue';
const emit = defineEmits(['change', 'clear'])

interface selectDataType {
    data: Array<{label: string, value: string | number}>
}

interface obj {
    label: string,
    value: string | number
}

let dataSource = reactive<selectDataType>({
    data: []
})


const props = withDefaults(defineProps<{
    name: string,
    label: string,
    id?: string,
    span: number,
    placeholder?: string,
    size: string,
    // data: any,
    optionKey: string,
    type?: string,
    cascaderCheck?: boolean,
    editable?: boolean,
    disabled?: boolean,
    filterable?: boolean,
    custom?: Array<any>,
    isCustom?: boolean,
    allowClear: boolean
}>(), {
    span: 10,
    placeholder: '请选择',
    size: 'medium',
    // data: {},
    type: 'select',
    cascaderCheck: false,
    editable: undefined,
    disabled: false,
    filterable: false,
    custom: [],
    isCustom: false,
    allowClear: true,

})
const change = (item: any) => {
    emit('change', item)
}

const clear = () => {
    emit('clear')
}

if (props.isCustom) {
    dataSource.data = props.custom
} else {
    service.select[props.optionKey]({}).then((res: any) => {
        dataSource.data = res

    })
}

watch(() => props.custom, () => {
    dataSource.data = props.custom
})

const data: { [key: string]: any } = inject('data') as { [key: string]: any }
let formEditable = inject('editable')

let defaultEditable: {flag: boolean} = reactive({
    flag: true
})

// 模拟Form和Form 内组件的权重 comp > form
// 模拟Form和Form 内组件的权重 comp > form
if (props.editable === undefined) {
    defaultEditable.flag = formEditable as boolean
} else {
    defaultEditable.flag = props.editable as boolean
}

</script>

<template>
    <el-col :span="props.span" class="text-style">
        <el-form-item :label="props.label ?? ''" :prop="props.name" fit-input-width label-width="150px" class="formItem">
            <template v-if="defaultEditable.flag">
                <el-select v-if="props.type === 'select'" class="el-select-comp" :allow-create="props.allowClear"
                    :disabled="disabled" :filterable="filterable" v-model="data[name as string]"
                    :placeholder="placeholder" clearable @clear="clear">
                    <el-option @click="change(item)" v-for="item in dataSource.data" :label="item.label"
                        :value="item.value" :key="item.label" />
                </el-select>
                <el-cascader v-if="props.type === 'cascader'" v-model="data[name as string]"
                    :options="dataSource.data" :placeholder="props.placeholder"
                    :props="{ checkStrictly: props.cascaderCheck }" clearable>
                </el-cascader>
            </template>
            <template v-else>
                {{ dataSource.data.find(i => i.value === data[name as string])?.label ?? '暂无数据' }}
            </template>
        </el-form-item>
    </el-col>
</template>

<style scoped>
    .text-style{
    }
    .formItem{
    }
.el-select-comp {
    /* width: 408px; */
    width: 100%;
}
</style>