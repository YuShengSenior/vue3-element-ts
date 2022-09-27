<!--
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-23 15:11:53
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-23 16:26:35
 * @FilePath: /vue3-ts-element/src/components/RoleTree/index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
-->
<script setup lang="ts">
import { ElTree } from 'element-plus'
import { ref } from 'vue';

withDefaults(defineProps<{
  data: Array<Tree>,
  isAllSelect?: boolean,
  checkedKeys?: Array<string | number>
}>(), {
  isAllSelect: !false,
  checkedKeys: [] as any
})

interface Tree {
  value: number | string
  label: string
  children?: Tree[]
}

const treeRef = ref<InstanceType<typeof ElTree>>()

defineExpose({
    treeRef
})

// TODO: 为了权限组最顶部的全选功能 待优化
const addAllSelect = <T,>(isAllSelect: boolean, data: T): T => {
  if (isAllSelect) {
    return ([{ label: '全选', value: 'all', children: data }] as T)
  }
  return data

}

</script>

<template>
  <div class="custom-tree-node-container">
    <el-tree ref="treeRef" :data="data" show-checkbox node-key="value" default-expand-all
      :expand-on-click-node="false" :props="{ class: 'diyRoleTree' as any }"
      :default-checked-keys="checkedKeys"
      />
  </div>
</template>
<style>
.el-tree-node.is-expanded.diyRoleTree>.el-tree-node__children {
  display: flex;
  flex-direction: row;
}
</style>