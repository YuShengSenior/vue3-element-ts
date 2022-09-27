<!--
 * @Description: 日历组件
 * @Author: YushengSenior
 * @Date: 2021-11-23 15:02:44
 * @LastEditTime: 2022-09-16 13:52:09
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script setup lang='ts'>
import { ref, reactive, defineProps } from 'vue';
// import { ArrowRight, ArrowLeft } from '@element-plus/icons';
const calendar = ref()
const selectDate = (val: string) => {
    calendar.value.selectDate(val)
}

const state = reactive({
    dates: new Date(2021, 10, 24)
})

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
})

</script>
<template>
    <el-calendar class="calendar" ref="calendar" v-model="state.dates">
        <template #header="{ date }">
            <span>{{ date }}</span>
            <el-button-group>
                <el-button size="mini" @click="selectDate('prev-month')">
                    <!-- <ArrowLeft style="width: 1em; height: 1em;" /> -->
                </el-button>
                <el-button size="mini" @click="selectDate('next-month')">
                    <!-- <ArrowRight style="width: 1em; height: 1em;" /> -->
                </el-button>
            </el-button-group>
        </template>
        <template #dateCell="{ data }">
            <div :class="props.data.includes(data.day) ? 'occupy' : 'normal'">
                <div class="text-box">
                    <div class="text">{{ data.day.split('-').slice(1).join('-') }}</div>
                </div>
            </div>
        </template>
    </el-calendar>
</template>

<style scoped>
.normal {
    color: #999999;
    width: 100%;
    height: 100%;
    line-height: 100%;
}
.occupy {
    background: dodgerblue;
    width: 100%;
    height: 100%;
    line-height: 100%;
    border-radius: 0.3125rem;
    color: #fff;
}
.calendar {
    width: 31.25rem;
}
.is-selected {
    color: #1989fa;
}
.icon {
    font-size: 1rem;
}
.text-box {
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
}
.text {
    font-size: 1rem;
}
</style>