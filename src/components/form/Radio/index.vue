<!--
 * @Author: YushengSenior Kingsun997@163.com
 * @Date: 2022-08-05 10:28:43
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-26 15:13:47
 * @FilePath: /vue3-ts-element/src/components/form/Radio/index.vue
 * @Description: 单选 组件
 * 
 * Copyright (c) 2022 by YushengSenior Kingsun997@163.com, All Rights Reserved. 
-->

<script setup lang='ts'>
import service from '@/service';
import { defineProps, reactive, inject } from 'vue'

interface selectDataType {
    selectData: Array<{ label: string, value: string | number }>
}

type showType = 'radio' | 'button'

const dataSource: selectDataType = reactive({
    selectData: []
})

const props = withDefaults(defineProps<{
    label: string,
    // data: object,
    span?: number,
    optionKey: string,
    name: string,
    type: showType,
    editable?: boolean
}>(), {
    span: 10,
    optionKey: 'isYNPull',
    type: 'radio',
    editable: undefined
})

service.select[props.optionKey]().then((res: any) => {
    dataSource.selectData = res
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
    <!-- TODO:  没有完成 editable情况下的数据回显-->
    <el-col :span="props.span" class="text-style">
        <el-form-item :label="props.label" :prop="props.name" label-width="150px">
            <el-radio-group v-model="data[props.name]" v-if="defaultEditable.flag">
                <el-radio v-if="props.type === 'radio'" v-for="item in dataSource.selectData" :label="item.value">{{ item.label }}</el-radio>
                <el-radio-button v-else v-for="item in dataSource.selectData" :label="item.value">{{ item.label }}</el-radio-button>
            </el-radio-group>
            <span v-else>
                {{ dataSource.selectData.find(i => i.value === data[name as string])?.label ?? '暂无数据' }}
            </span>
        </el-form-item>
    </el-col>
</template>