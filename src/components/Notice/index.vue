<!--
 * @Description: hearder-消息通知组件
 * @Author: YushengSenior
 * @Date: 2021-10-29 13:58:59
 * @LastEditTime: 2021-11-17 15:38:17
 * @LastEditors: YushengSenior
-->
<script lang="ts" setup>
import { reactive, watch, computed } from 'vue';
import noticeImg from '@/assets/img/icon_notice_24_nor@3x.png'
import { useRouter } from 'vue-router'

const route = useRouter()
const pathUrl = {
    privateLetter: '/message-notification/private-letter',
    auditNotice: '/message-notification/audit-notification',
    appointmentNotice: '/message-notification/appointment-notification'
}

interface Inotice {
    appointmentNoticeCount: number ,
    messageTotal: number ,
    reviewNoticeCount: number ,
    total: number 
}
const notice = reactive({
    noticeObj:<Inotice> {
        appointmentNoticeCount: <number> -1,
        messageTotal: <number> -1,
        reviewNoticeCount: <number> -1,
        total: <number> -1
    }
})

const noticeInfo = computed(() => {
    return store.getters.getNoticeInfo;
})

watch(() => noticeInfo.value, (val,oldval) => {//通过一个函数返回要监听的属性
    console.log('信息值变化：' + JSON.stringify(val));
    notice.noticeObj = val;
},
    { 
        deep: true,
        immediate: true }
)


const handleClickToPage = (e: string): void => {
    route.push(pathUrl[e])
}
</script>

<template>
    <el-dropdown class="n-drop">
        <div class="el-dropdown-link n-img-box">
            <img :src="noticeImg" :alt="t('err.img')" class="n-img" />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item class="n-drop-item"
                    @click="handleClickToPage('privateLetter')"
                >
                    {{ t('notice.private-letter') }}
                    <div class="red-spot-item" v-if="notice.noticeObj.reviewNoticeCount>0">{{ notice.noticeObj.messageTotal > 99 ? 99 : notice.noticeObj.messageTotal }}</div>
                </el-dropdown-item>
                <el-dropdown-item class="n-drop-item"
                    @click="handleClickToPage('auditNotice')"
                >
                    {{ t('notice.audit-notice') }}
                    <div class="red-spot-item" v-if="notice.noticeObj.reviewNoticeCount>0">{{ notice.noticeObj.reviewNoticeCount > 99 ? 99 : notice.noticeObj.reviewNoticeCount }}</div>
                </el-dropdown-item>
                <el-dropdown-item class="n-drop-item"
                    @click="handleClickToPage('appointmentNotice')"
                >
                    {{ t('notice.appointment-notice') }}
                    <div class="red-spot-item" v-if="notice.noticeObj.appointmentNoticeCount>0">{{ notice.noticeObj.appointmentNoticeCount > 99 ? 99 : notice.noticeObj.appointmentNoticeCount }}</div>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
        <div class="red-spot" v-if="notice.noticeObj['total']>0"></div>
    </el-dropdown>
</template>

<style>
.n-img-box {
    height: 100%;
    display: flex;
    align-items: center;
}

.n-img {
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: middle;
    align-items: center;
}
.n-drop {
    position: relative;
    margin-left: 2.0625rem;
    vertical-align: middle;
    height: 100%;
}
.n-drop-item{
    position: relative;

}
.red-spot {
    position: absolute;
    right: 0;
    top: 18px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #f00;
}
.red-spot-item{
    position: absolute;
    right: 3px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    text-align: center;
    width: 15px;
    white-space: nowrap;
    /* 
    height: 15px;
    border-radius: 50%;
    background-color: #f00; */
    color:#f00;
    font-size: 13px;
}
.el-dropdown-link {
    cursor: pointer;
}
</style>