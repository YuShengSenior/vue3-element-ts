<!--
 * @Description: hearder右上角用户信息组件
 * @Author: YushengSenior
 * @Date: 2021-10-29 14:35:11
 * @LastEditTime: 2022-09-23 17:20:17
 * @LastEditors: 余笙学长 kingsun997@163.com
-->
<script lang="ts" setup>
import service from "@/service";
import { useLoginStore } from "@/stores/login/store";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import config from '../../../config/config'
import { Dialog, message } from '@/components'
import { Form, Text } from '@/components/form'

const loginStore = useLoginStore()

const router = useRouter()

const username = window.localStorage.getItem("username");

let dialogFlag = ref(false)
let btnLoading = ref(false)
let data = reactive({
    formData: {}
})
const handleClickLogOut = (): void => {
    loginStore.clearLoginInfo()
    router.replace('/login')
    service.system.logout().then((res) => {
        loginStore.clearLoginInfo()
        router.replace('/login')
    })
}

const openChangePasswordDialog = () => {
    dialogFlag.value = true
}

const handleCloseDialog = () => {
    dialogFlag.value = false
}

const handleConfirm = () => {
    console.log(data.formData);
    btnLoading.value = true
    service.system.changePassword(data.formData).then((res) => {
        dialogFlag.value = false
        message.success('操作成功！')
        handleClickLogOut()
    }).catch(err => {
        // do something
        btnLoading.value = false
    })
}

</script>

<template>
    <el-dropdown class="n-drop" v-if="config.avatarArea !== 'horizontal'">
        <span class="n-box el-dropdown-link">
            <el-avatar class="u-avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <span class="u-name">{{ username }}狂拽酷炫张三丰</span>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="openChangePasswordDialog">修改密码</el-dropdown-item>
                <el-dropdown-item @click="handleClickLogOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <div class="horizontalStyle" v-else>
        <el-avatar class="horizontalStyleAvatar"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <span class="horizontalStyleUserName">{{ username }}</span>
        <a class="horizontalLogout" @click="handleClickLogOut">退出</a>
    </div>
    <Dialog title="修改密码" :isShow="dialogFlag" @cancel="handleCloseDialog" @confirm="handleConfirm" width="30%" :saveLoading="btnLoading">
        <Form :form="data.formData" ref="form">
            <Text type="password" label="原密码" name="oldPassword" :data="data.formData" :span="15" />
            <Text type="password" label="新密码" name="newPassword" :data="data.formData" :span="15" />
            <Text type="password" label="重复新密码" name="repeatNewPassword" :data="data.formData" :span="15" />
        </Form>
    </Dialog>
</template>
<style scoped>
.n-drop {
    margin-right: 88px;
}

.n-box {
    height: 100%;
    display: flex;
    align-items: center;
}

.el-dropdown-link {
    cursor: pointer;
}

.n-img {
    width: auto;
    height: 100%;
    vertical-align: middle;
    align-items: center;
}

.n-drop {
    margin-left: 2.0625rem;
    vertical-align: middle;
    height: 100%;
}

.u-name {
    margin-left: 0.625rem;
}

.u-avatar {
    width: 32px;
    height: 32px;
}

.horizontalStyle {
    height: 64px;
    margin-right: 88px;
    line-height: 64px;
    display: flex;
    align-items: center;
}

.horizontalStyleAvatar {
    margin-right: 10px;
}

.horizontalStyleUserName {
    margin-right: 32px;
}

.horizontalLogout {
    user-select: none;
    cursor: pointer;
}
</style>