<!--
 * @Description: dropdown 组件
 * @Author: YushengSenior
 * @Date: 2021-11-23 14:44:11
 * @LastEditTime: 2021-11-23 15:07:43
 * @LastEditors: YushengSenior
-->
<script lang="ts" setup>
import { reactive } from 'vue';

defineProps({
    name: {
        type: String,
    },
    id: {
        type: String,
    },
    label: {
        type: String,
    },
    span: {
        type: Number,
        default: () => 7
    },
    placeholder: {
        type: String,
        default: () => 'pub.placeholder'
    },
    size: {
        type: String,
        default: () => 'medium'
    },
    type: {
        type: String,
        default: () => 'text'
    },
    required: {
        type: Boolean,
        default: () => false
    },
    data: {
        type: Object,
        default() {
            return {}
        }
    },
    editable: {
        type: Boolean,
        default: () => true
    },
})

</script>

<template>
    <el-col :span="span" class="text-style">
        <el-form-item
            label="下拉选择占位符"
            :prop="name"
            :required="required"
            label-width="150px"
        >
            <!-- <el-input
                v-if="editable"
                v-model="data[(name) as string]"
                :type="type"
                :size="`${size}`"
                :placeholder="t(placeholder)"
                :autosize="{ minRows: 3, maxRows: 3 }"
            />-->
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    查看档期
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <slot></slot>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-form-item>
    </el-col>
</template>

<style scoped>
.text-style {
}
</style>