<!--
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-23 09:49:00
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-26 15:13:19
 * @FilePath: /vue3-ts-element/src/components/form/CheckBox/index.vue
 * @Description: 多选组件
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
-->
<script setup lang="ts">
import service from '@/service';
import { reactive, computed, watch, ref, inject } from 'vue';


const props = withDefaults(defineProps<{
    label: string,
    name: string,
    data: any,
    optionKey: string
    span?: number,
    editable?: boolean,
}>(), {
    data: {},
    span: 10,
    editable: undefined
})

interface dataType {
    data: Array<{
        label: string,
        value: string | number
    }>,
    showItems: Array<showItemsType>
}

const dataSource: dataType = reactive({
    data: [],
    showItems: []
})

type showItemsType = {
    label: string,
    value: string | number
}

try{
    service.select[props.optionKey]().then((res: any) => {
    dataSource.data = res
}).catch((e: any) => {
    dataSource.data = []
})
} catch(error) {
    dataSource.data = []
    throw new Error(error);
}

const getLabel = (item: string | number) => {
    console.log(item);
    return '123123'
}

const getShowLabel = computed(() => {
    for (let i = 0; i < props.data[props.name].length; i++) {
        return dataSource.data.find(item => item.value === props.data[props.name][i])?.label
    }
})

const formData: { [key: string]: any } = inject('data') as { [key: string]: any }
let formEditable = inject('editable')

console.log(formData);


watch(() => dataSource.data, () => {
    for (let i = 0; i < formData[props.name].length; i++) {
        dataSource.showItems.push(dataSource.data.find(item => item.value === formData[props.name][i])?.label)
    }
    console.log(dataSource.showItems);
})



let defaultEditable: {flag: boolean} = reactive({
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
    <el-col :span="span" class="text-style">
        <el-form-item :label="label" :prop="name" label-width="150px">
            <el-checkbox-group v-model="formData[name]" v-if="defaultEditable.flag">
                <el-checkbox v-for="item in dataSource.data" :label="item.value"> {{ item.label }} </el-checkbox>
            </el-checkbox-group>
            <span class="checkBoxShowLabel" v-else v-for="item in dataSource.showItems" :key="item">
                {{ item }}
            </span>
        </el-form-item>
    </el-col>
</template>

<style scoped>
.checkBoxShowLabel{
    margin: 0px 3px;
}
</style>