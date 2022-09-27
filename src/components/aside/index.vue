<!--
 * @Description: 侧边栏
 * @Author: YushengSenior
 * @Date: 2021-10-28 13:20:47
 * @LastEditTime: 2022-09-16 09:58:46
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script lang="ts" setup>
import Menu from '@/components/Menu/index.vue'

const props = defineProps({
    menuHeaderData: Array,
    horizontal: {
        type: String,
        default: () => 'horizontal',
    }
})

</script>
<template>
    <el-aside width="272px" class="m-menu">
        <el-row class="tac">
            <el-col :span="24">
                <Menu :menuHeaderData="props.menuHeaderData" :horizontal="props.horizontal" />
            </el-col>
        </el-row>
    </el-aside>
</template>

<style>
.m-width {
    width: 17rem;
}
.m-logo-box {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.m-logo {
    width: 9.5rem;
    height: 2.4375rem;
    line-height: 2.4375rem;
}
.m-normal {
    width: 100%;
    text-align: center;
}
.m-menu {
        text-align: center;
        overflow-y: scroll;
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */
        overflow-x: hidden;
        overflow-y: auto;
}
.m-menu::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.b-text {
    font-size: 14px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    font-weight: 400;
    text-align: left;
    color: #999999;
}
</style>
