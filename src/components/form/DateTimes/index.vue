<!--
 * @Description: 日期区间选择器
 * @Author: YushengSenior
 * @Date: 2021-11-06 14:00:07
 * @LastEditTime: 2022-09-20 16:28:10
 * @LastEditors: YushengSenior Kingsun997@163.com
-->
<script setup lang='ts'>
import { defineProps, defineEmits } from 'vue'
import { Plus, CircleClose } from '@element-plus/icons-vue';

const emit = defineEmits([''])


const props = defineProps({
    name: {
        type: String,
    },
    label: {
        type: String,
    },
    id: {
        type: String,
    },
    format: {
        type: String,
    },
    span: {
        type: Number,
        default: () => 5
    },
    placeholder: {
        type: String,
        default: () => 'select.placeholder'
    },
    size: {
        type: String,
        default: () => 'medium'
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
    type: {
        type: String,
        default: () => 'daterange'
    },
    editable: {
        type: Boolean,
        default: () => true
    },
})

const handleClickAdd = (): void => {
    console.log('add')
    props.data[props.name as string].push([])
}

const handleClickDel = (index: number): void => {
    console.log(index + 'del')
    props.data[props.name as string].splice(index, 1)
}

</script>
<template>
    <el-col :span="props.span" class="text-style">
        <el-form-item
            :label="props.label"
            :prop="props.name"
            fit-input-width
            :required="props.required"
            label-width="150px"
        >
            <div
                v-if="editable && props.data[props.name as string].length"
                v-for="(item, index) in props.data[props.name as string]"
                class="times-picker-box"
            >
                <el-date-picker
                    style="width: 12.75rem;"
                    v-model="props.data[props.name as string][index][0]"
                    type="date"
                    placeholder="请选择日期"
                    format="YYYY/MM/DD"
                    align="center"
                    value-format="YYYY-MM-DD"
                />
                <el-time-picker
                    class="time-picker"
                    style="width: 12.75rem;"
                    align="center"
                    v-model="props.data[props.name as string][index][1]"
                    is-range
                    range-separator="-"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    format="HH:mm:ss"
                    value-format="HH:mm:ss"
                />
                <div class="btns-box">
                    <span
                        class="add-icon opaBtn-icon"
                        @click="handleClickAdd"
                        v-if="index === props.data[props.name as string].length - 1"
                    >
                        <el-icon>
                            <circle-close
                                style="transform:rotate(45deg); color: #3E80BD; font-size: 20px; width: 20px; height: 20px;"
                            />
                        </el-icon>
                    </span>
                    <span
                        class="opaBtn-icon"
                        v-if="props.data[props.name as string].length > 1"
                        @click="handleClickDel(index)"
                    >
                        <el-icon>
                            <circle-close
                                style="font-size: 20px; color: #FF0000; width: 20px; height: 20px;"
                            />
                        </el-icon>
                    </span>
                </div>
            </div>
            <div
                v-else
                v-for="(item, index) in props.data[props.name as string]"
            >{{ item.subscribeStartTime + '  ~  ' + item.subscribeEndTime }}</div>
        </el-form-item>
    </el-col>
</template>

<style scoped>
.add-icon {
    margin-right: 0.625rem;
}
.opaBtn-icon {
    cursor: pointer;
}
.times-picker-box {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: flex-end;
}
.btns-box {
    width: 3.125rem;
    padding-right: 0.625rem;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-wrap: nowrap;
}
</style>