<!--
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-08-05 10:28:43
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-26 10:20:42
 * @FilePath: /vue3-ts-element/src/components/form/FormCard/index.vue
 * @Description: Form表单组件
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
-->


<script setup lang="ts">
import { reactive, onBeforeUnmount, ref, provide } from 'vue';
import { ElForm, type FormInstance } from 'element-plus'
interface rules {
    [propName: string]: {
        required: boolean,
        trigger: string,
        message: string,
        validator?: any,
    }
}

interface propsRule {
    name: string,
    type: string
}

enum formType {
    'input' = '内容不能为空！',
    'select' = '选择内容不能为空！'
}

type Align = "right" | "left" | "top"

let props = withDefaults(defineProps<{
    form: object,
    align?: Align,
    rules?: Array<propsRule>,
    loading: boolean,
    editable?: boolean,
}>(), {
    align: 'right',
    loading: false,
    editable: true
})


const formRef = ref<FormInstance>()


formRef.value

const state = reactive({
    rules: {}
})

defineExpose({
    formRef
})

const emit = defineEmits(['submit', 'reset'])

// TODO: form组件销毁的时候清空form表单
onBeforeUnmount(() => {
    state.rules = {}
    formRef.value?.resetFields()
})

const autoRules = () => {
    const { rules } = props
    if (rules && Array.isArray(rules) && rules.length !== 0) {
        const temp_rule: rules = {}
        for (let i: number = 0; i < rules.length; i++) {
            temp_rule[rules[i].name] = {
                required: true,
                message: formType[rules[i].type],
                trigger: rules[i].type === 'input' ? 'blur' : 'change',
            }
        }
        state.rules = temp_rule
    }
}
autoRules()

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
            emit('submit', valid)
        } else {
            emit('submit', valid)
            console.log('error submit!')
            return false
        }
    })
}

provide('data', props.form)
provide('editable', props.editable)
</script>

<template>
    <div class="form-box">
        <el-form ref="formRef" :rules="state.rules" :model="props.form" :label-position="props.align" :scroll-to-error="true">
            <el-row justify="space-between" class="form-row" :gutter="24">
                <slot class="form-inputs"></slot>
            </el-row>
        </el-form>
    </div>
</template>

<style scoped>
.form-box {
    width: auto;
    height: auto;
}
</style>