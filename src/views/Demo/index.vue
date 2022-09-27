<!--
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-15 14:15:44
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-26 15:30:30
 * @FilePath: /vue3-ts-element/src/views/Demo/index.vue
 * @Description: Demo组件
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
-->
<script setup lang="ts">
import { Form, Text, CheckBox } from '@/components/form';
import { PageCard, Table, Search } from '@/components'
import service from '@/service';
import { reactive, type Ref, ref, onMounted } from 'vue';
import Select from '../../components/form/Select/index.vue';
import Tree from '../../components/Tree/index.vue';
import Radio from '../../components/form/Radio/index.vue';
import DatePicker from '../../components/form/DatePicker/index.vue';
import { useLoginStore } from '@/stores/login/store';
import { storeToRefs } from 'pinia'
import RoleTree from '../../components/RoleTree/index.vue'
const loginStore = useLoginStore()
const { count } = storeToRefs(loginStore)
const obj = reactive({
    name: '张三',
    checkbox: [1,2,3],
    select: 5, 
    age: 12,
    address: '地球'
})
const state = reactive({
    loading: false,
})

let tRole = [
    { name: 'test', require: true, type: 'input' },
    { name: 'select', require: true, type: 'select' },

]

const submitForm = (e: any): void => {
    if (e) {
        state.loading = !state.loading
        service.system.testRequest({}).then(res => {
            setTimeout(() => {
                state.loading = !state.loading
            }, 1500);
        })
    }
}

const colums = [
    {
        name: 'accountId',
        label: 'ID',
    },
    {
        name: 'name',
        label: '姓名',
    },
    {
        name: 'email',
        label: 'Email',
    },
]

let treeData = ref([
    {
        value: 1,
        label: 'Level one 1',
        children: [
            {
                value: 4,
                label: 'Level two 1-1',
                children: [
                    {
                        value: 9,
                        label: 'Level three 1-1-1',
                    },
                    {
                        value: 10,
                        label: 'Level three 1-1-2',
                    },
                ],
            },
        ],
    },
    {
        value: 2,
        label: 'Level one 2',
        children: [
            {
                value: 5,
                label: 'Level two 2-1',
            },
            {
                value: 6,
                label: 'Level two 2-2',
            },
        ],
    },
    {
        value: 3,
        label: 'Level one 3',
        children: [
            {
                value: 7,
                label: 'Level two 3-1',
            },
            {
                value: 8,
                label: 'Level two 3-2',
            },
        ],
    },
])


const treeRoleRef = ref()


const handleChangePage = (e: any) => {

}

const data: Array<any> = reactive({
    rows: [{
        accountId: 123,
        name: '张123',
        email: 123
    }],
    total: 200,
})

let searchParams = ref<Ref>({})

const handleSearch = () => {

}

const handleReset = () => {

}

const handleAdd = (item: any) => {

    console.log(item);
}

const handleSubmit = () => {
    console.log(obj);

}

const handleChangeCount = (): void => {
    loginStore.setCount()
}


const getRef = () => {
    console.log(treeRoleRef.value.treeRef.getCheckedKeys());
}

let keys: Array<{
    data: Array<any>
}> = reactive({
    data: []
})

onMounted(() => {
    setTimeout(() => {
        keys.data = [1, 4, 9, 10]
    }, 500);
})

let formEditable = reactive({
    flag: true
})


const changeFormEditable = () => {
    formEditable.flag = !formEditable.flag
}

const setNameVale = () => {
    obj.name = '王五'
}

</script>

<template>
    <PageCard title="详情" :footer="true">
        <!-- <Search :form="searchParams" @onSearch="handleSearch" @onReset="handleReset">
            <Text id="agent.id" name="accountId" :data="searchParams" />
            <Text label="最近登录时间" id="agent.loginTime" name="loginTime" :data="searchParams" />
        </Search>
        <Table :data="data" :column="colums" @pageChange="handleChangePage" idKey="agent">
            <Operation width="280" #default="{ item }">
                <el-button>操作</el-button>
            </Operation>
        </Table> -->
        <Form :form="obj" :rules="tRole" :onSubmit="submitForm" :loading="state.loading" :editable="false">
            <Text label="姓名" name="name"/>
            <Text label="年龄" name="age" :editable="true"/>
            <!-- <Text label="家庭地址" name="address"/>
            <Select name="select" label="下拉" optionKey="mySelect"/>
            <Radio name="select" label="单选" optionKey="mySelect" />
            <DatePicker name="date" label="日期" :editable="false" type="datetime" />
            <CheckBox label="多选" name="checkbox" optionKey="checkBox" :editable="false" /> -->
        </Form>
        <template #footer>
            <el-button @click="handleSubmit">提交</el-button>
        </template>
        <!-- <el-row justify="space-between" class="form-row" :gutter="24">
            <Tree :data="treeData" @add="handleAdd" :showSearch="true" :span='12' />
        </el-row>
        {{ loginStore.loginInfo }}
        <el-button @click="handleChangeCount">++</el-button> -->

        <!-- <RoleTree ref="treeRoleRef" :data="data" :checkedKeys="keys.data"/>
        <el-button @click="getRef">++</el-button> -->

    </PageCard>
</template>

<style scoped>

</style>