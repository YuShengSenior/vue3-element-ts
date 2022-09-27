<!--
 * @Author: YushengSenior Kingsun997@163.com
 * @Date: 2022-09-20 13:57:27
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-22 17:33:11
 * @FilePath: /vue3-ts-element/src/components/Tree/index.vue
 * @Description: tree组件
 * 
 * Copyright (c) 2022 by YushengSenior Kingsun997@163.com, All Rights Reserved. 
-->
<script lang="ts" setup>
import { ref, watch } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import { ElTree } from 'element-plus'
import { Search } from '@element-plus/icons-vue'


type iconsType = 'edit'| 'add'| 'remove' | 'more'

let props = withDefaults(defineProps<{
    data: Array<Tree>,
    checkbox?: boolean,
    showIcons: string[],
    span: number,
    placeholder?: string,
    showSearch: true,
    checkedKeys?: Array<string | number>,
}>(), {
    checkbox: false,
    span: 4,
    placeholder: '请输入',
    showSearch: true,
    data: [],
    // TODO: 报错未解决
    showIcons: ['edit', 'add', 'remove', 'more'],
    checkedKeys: []
})

const emit = defineEmits(['edit', 'add', 'remove', 'more', 'clickNode', 'checkChange'])

interface Tree {
    value: number | string
    label: string | number
    children?: Tree[]
}

const append = (item: Tree) => {
    emit('add', item)
}

const remove = (item: Tree) => {
    emit('remove', item)
}

const edit = (item: Tree) => {
    emit('edit', item)
}

const more = (item: Tree) => {
    emit('more', item)
}

const dataSource = ref<Tree[]>()

const treeRef = ref<InstanceType<typeof ElTree>>()

defineExpose({
    treeRef
})

const filterText = ref('')

watch(filterText, (val) => {
    treeRef.value!.filter(val)
})

const filterNode = (value: string, data: Tree) => {
    if (!value) return true
    return (data.label as string).includes(value)
}


const handleClickNode = (ndoe: Tree, treenode, event, item) => {
    emit('clickNode', ndoe)

}

const handleCheckChange = (ndoe: Tree, checkedObj: boolean, isChildrenSelected: boolean) => {
    emit('checkChange', checkedObj)
}


</script>

<template>
    <el-col :span="props.span" class="text-style">
        <el-card class="box-card">
            <template #header>
                <el-input v-if="props.showSearch" v-model="filterText" :placeholder="props.placeholder"
                    :suffix-icon="Search" />
            </template>
            <div class="custom-tree-container">
                <el-tree ref="treeRef" :data="props.data" :show-checkbox="props.checkbox" node-key="value"
                    :expand-on-click-node="false" :filter-node-method="filterNode" @node-click="handleClickNode"
                    @check="handleCheckChange"
                    :default-checked-keys="props.checkedKeys"
                    >
                    <template #default="{ node, data }">
                        <span class="custom-tree-node">
                            <span>{{ node.label }}</span>
                            <span>
                                <a @click="edit(data)" v-if="props.showIcons.includes('edit')">
                                    <el-icon>
                                        <Edit />
                                    </el-icon>
                                </a>
                                <a class="opaStyle" @click="append(data)" v-if="props.showIcons.includes('add')">
                                    <el-icon>
                                        <CirclePlus />
                                    </el-icon>
                                </a>
                                <a class="opaStyle" @click="remove(data)" v-if="props.showIcons.includes('remove')">
                                    <el-icon>
                                        <Remove />
                                    </el-icon>
                                </a>
                                <a class="opaStyle" @click="more(data)" v-if="props.showIcons.includes('more')">
                                    <el-icon>
                                        <MoreFilled />
                                    </el-icon>
                                </a>
                            </span>
                        </span>
                    </template>
                </el-tree>
            </div>
        </el-card>
    </el-col>
</template>
  
<style scoped>
.box-card {
    height: 100%;
}

.opaStyle {
    margin-left: 4px;
}

.custom-tree-container {
    user-select: none;
}

.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
</style>
  