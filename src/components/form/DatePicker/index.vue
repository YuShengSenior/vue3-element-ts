<!--
 * @Description: 日期区间选择器
 * @Author: YushengSenior
 * @Date: 2021-11-06 14:00:07
 * @LastEditTime: 2022-09-26 15:13:12
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script setup lang='ts'>
import { defineProps, defineEmits, inject, reactive } from 'vue'
import dayjs from 'dayjs'

const emit = defineEmits([''])


// TODO: 单日期 / 日期区间还没有完善
type dateType = 'datetime' | 'datetimerange' | 'daterange'
//                 单个日期   日期区间 可选时间      日期区间
const props = withDefaults(defineProps<{
    name: string,
    label: string,
    format: string,
    // data: {},
    type: dateType,
    editable?: boolean,
    span: number,

}>(), {
    type: 'daterange',
    format: 'YYYY/MM/DD HH:mm:ss',
    span: 10,
    editable: undefined
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
    <el-col :span="span" class="text-style">
        <el-form-item :label="label" :prop="name" fit-input-width label-width="150px">
            <el-date-picker v-if="type !== 'datetime' && defaultEditable.flag" v-model="data[name]" :type="type"
                range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期"
                :format="type === 'datetimerange' ? format : 'YYYY/MM/DD'" value-format="x" size="default" />
            <el-date-picker v-if="type === 'datetime' && defaultEditable.flag" v-model="data[name]" :type="type"
                placeholder="请选择日期和时间" />
            <span v-else>
                <template v-if="type !== 'datetime' && !defaultEditable.flag">
                    {{ dayjs(data[name][0]).format('YYYY-MM-DD HH:mm:ss') }} - {{
                    dayjs(data[name][1]).format('YYYY-MM-DD HH:mm:ss') }}
                </template>
                <template v-if="type === 'datetime' && !defaultEditable.flag">
                    {{ dayjs(data[name]).format('YYYY-MM-DD HH:mm:ss') }}
                </template>
            </span>
        </el-form-item>
    </el-col>
</template>