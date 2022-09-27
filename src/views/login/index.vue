<!--
 * @Author: YushengSenior Kingsun997@163.com
 * @Date: 2022-09-14 10:57:04
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-27 11:53:51
 * @FilePath: /vue3-ts-element/src/views/login/index.vue
 * @Description: 登录页面
 * 
 * Copyright (c) 2022 by YushengSenior Kingsun997@163.com, All Rights Reserved. 
-->
<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue'
import { useLoginStore } from '@/stores/login/store';
import { storeToRefs } from 'pinia';
import { Form } from '@/components/form';
import service from '@/service';
import { UserFilled, Unlock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router';
const router = useRouter()
const ruleFormRef = ref<FormInstance>()

const loginForm = reactive({
  account: '',
  password: ''
})

let loginBtnStatus: Ref<boolean> = ref(false)

const login = useLoginStore()

const { loginInfo } = storeToRefs(login)

const submitForm = (formEl: FormInstance | undefined) => {
  loginBtnStatus.value = !loginBtnStatus.value
  service.system.login(loginForm).then(res => {
    loginBtnStatus.value = !loginBtnStatus.value
    // TODO: 存储登录信息
    login.setLoginInfo(res)
    router.replace('/home')
  })
  .catch(e => {
    loginBtnStatus.value = !loginBtnStatus.value
    login.setLoginInfo(e)
    router.replace('/home')
  })
}

</script>
<template>
  <div class="loginBox">
    <div class="loginForm">
      <div class="loginHeader">
        <div class="loginTittle">登录</div>
        <el-divider />
      </div>
      <el-form ref="ruleFormRef" :model="loginForm" status-icon class="formBox">
        <el-form-item prop="account">
          <el-input v-model="loginForm.account" class="formInput" placeholder="请输入账号" :prefix-icon="UserFilled"
            size="large" />
        </el-form-item>
        <el-form-item prop="name">
          <el-input v-model="loginForm.password" class="formInput" placeholder="请输入密码" :prefix-icon="Unlock"
            size="large" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button :loading="loginBtnStatus" type="primary" class="login-btn" @click="submitForm(ruleFormRef)"
            size="large">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>



<style scoped>
.loginBox {
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}

.loginForm {
  width: 426px;
  height: 376px;
  border-radius: 30px;
  box-shadow: 0px 5px 8px 0px rgba(248, 106, 43, 0.16);
  padding: 52px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 195px;
  right: 164px;
}

.loginHeader {
  height: 87px;
}

.loginTittle {
  font-size: 48px;
  font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  font-weight: 400;
  text-align: left;
  color: #f86a2b;
  user-select: none;
}

.login-btn {
  width: 100%;
  height: 56px;
  line-height: 56px;
  font-size: 18px;
  font-family: Microsoft YaHei, Microsoft YaHei-Bold;
  font-weight: 700;
  text-align: left;
  color: #ffffff;
}

.formBox {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.formInput {
  height: 56px;
  line-height: 56px;
}
</style>