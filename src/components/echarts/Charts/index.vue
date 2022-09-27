<!--
 * @Description: 
 * @Author: YushengSenior
 * @Date: 2021-12-14 11:28:47
 * @LastEditTime: 2021-12-16 10:46:02
 * @LastEditors: YushengSenior
-->
<script setup lang='ts'>
import { defineProps, onMounted, watch, ref } from 'vue';
import { getUuid } from '@/utils'
import * as echarts from 'echarts';

const props = defineProps({
    smooth: {
        type: Boolean,
        default: () => false
    },
    chatrsType: {
        type: String,
        default: () => "bar"
    },
    color: {
        type: String,
        default: () => "#3E80BD"
    },
    data: {
        type: Object,
        default: () => {}
    },
    xConfig: {
        type: Object,
        default: () => {}
    },
    yConfig: {
        type: Object,
        default: () => {}
    },
})

const uuid = ref(getUuid())

let myChart: any

const initEcharts = (): void => {
    var chartDom = document.getElementById(`echarts-comp-${uuid.value}`)!;
    myChart = echarts.init(chartDom);
}

onMounted(() => {
    initEcharts()
})

const setEchartsData = () => {
    myChart.setOption({
        xAxis: {
            type: 'category',
            data: props.data.xData,
            ...props.xConfig
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: props.data.yData,
                type: props.chatrsType,
                smooth: props.smooth
            }
        ],
        color: [
            props.color
        ]
    });
}

watch(() => props.data, () => {
    setEchartsData()
})

console.log(uuid.value)

</script>
<template>
    <div :id="`echarts-comp-${uuid}`" :style="{ width: '100%', height: '15rem' }"></div>
</template>