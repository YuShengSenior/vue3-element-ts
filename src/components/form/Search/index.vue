<!--
 * @Description: 封装搜索组件
 * @Author: YushengSenior
 * @Date: 2021-11-02 14:26:05
 * @LastEditTime: 2022-09-26 14:52:05
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script setup lang="ts">
import { defineProps, ref, defineEmits, provide } from 'vue';
import { ElForm } from 'element-plus'
// import { Search  } from '@element-plus/icons'

const props = withDefaults(defineProps<{
    form: object
}>(),{})

const emit = defineEmits(['onSearch', 'onReset'])


const searchRef = ref<InstanceType<typeof ElForm>>()

const submitForm = (): void => {
    emit('onSearch')
}

const resetForm = (): void => {
    emit('onReset')
    searchRef.value?.resetFields()
}

provide('data', props.form)
provide('editable', true)
</script>

<template>
    <div>
        <el-form label-position="right" ref="searchRef" :model="props.form">
            <el-row :gutter="24">
                <el-col :span="20">
                    <el-row class="search-input">
                        <slot></slot>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <el-button size="large" @click="resetForm()">重置</el-button>
                    <el-button size="large" type="primary" @click="submitForm()">
                        查询
                    </el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
    <el-divider />
</template>


<style scoped>
.el-divider {
    margin: 0 0 1.5rem 0 !important;
}

.search-form {
    width: 100%;
}
.search-input{
    display: flex;
    flex-direction: row-reverse;
}
</style>