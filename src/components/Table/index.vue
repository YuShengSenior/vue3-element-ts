<!--
 * @Description: table组件
 * @Author: YushengSenior
 * @Date: 2021-11-02 19:11:42
 * @LastEditTime: 2022-09-23 10:21:14
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script setup lang="ts">
import { ref } from 'vue'
interface Icolumn {
    name: string,
    label: string,
    fixed?: boolean,
    type?: string,
    pagination?: boolean,
    width?: number,
    overflowHide?: boolean,
}

type objType = {
    [key: string]: any
}

const props = withDefaults(defineProps<{
    idKey: string,
    data: objType,
    column: Array<Icolumn>,
    pagination?: boolean,
    isSelect?: boolean,
    rowKey?: string
}>(), {
    pagination: true,
    isSelect: false
})

const cellClick = (row: any, column: any, cell: any, event: any) => {
    // console.log(row, ';-----------------')
    // console.log(column, ';-----------------')
    // console.log(cell, ';-----------------')
    // console.log(event, ';-----------------')
}

const emit = defineEmits(['pageChange', 'selectRows'])

const handleCHangeSize = (e: any) => {
    emit('pageChange', e)
}

const currentPage = ref(1)
const pageSize = ref(10)

const handleSelectionChange = (rows: any[]): void => {
    let rowkeys: Array<string | number> = []
    for (let i: number = 0, len: number = rows.length; i < len; i++) {
        rowkeys.push(rows[i][props.rowKey as string])
    }
    emit('selectRows', rowkeys, rows)
    rowkeys.length = 0
}

</script>
    
<template>
    <div class="table-box">
        <el-table @cell-click="cellClick" fit :data="props.data.rows" empty-text="暂无数据" size="medium" @selection-change="handleSelectionChange">
            <el-table-column v-if="props.isSelect" type="selection" width="55" />
            <el-table-column v-for="(item, index) in props.column" :key="index" :fixed="item.fixed ? true : false" :type="item.type"
                :prop="item.name" :label="item.label" :width="item.width" align="center" header-align="center"
                :show-overflow-tooltip="item.overflowHide" />
            <slot />
        </el-table>
    </div>
    <div class="paginationBox">
        <el-pagination class="smallBox" v-if="props.pagination && props.data.rows.length" v-model:currentPage="currentPage" v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]" :small="false" :background="true"
            layout="total, prev, pager, next, sizes, jumper" :total="props.data.total || 0"
            @size-change="handleCHangeSize" @current-change="handleCHangeSize"
            :hide-on-single-page="props.data.total <= 1 ? true : false" />
    </div>

</template>
    
<style scoped>
.table-box {
    height: auto;
}

.table-pagination {
    text-align: center;
    margin-top: 3.9375rem;
}

.paginationBox{ 
    display: flex;
    justify-content: end;
}
</style>