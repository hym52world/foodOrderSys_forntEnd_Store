<template>
  <div class="container">
    <div class="login" v-loading="loading">
      <div class="left">
        <div class="login_form">
          <div class="logo"></div>
          <div class="title">登陆</div>
          <div class="subtitle">请使用注册的手机号密码进行登录</div>
          <el-form class="form" v-model="formList" ref="loginForm" label-width="100px">
            <el-form-item prop="tenantPhone" label="手机号">
              <el-input v-model="formList.tenantPhone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="tenantPassword" label="密码">
              <el-input v-model="formList.tenantPassword" type="password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="login()">登陆</el-button>
            </el-form-item>
          </el-form>
          <div class="register"><router-link to="/register">没有账号？点击注册</router-link></div>
        </div>
      </div>
      <div class="right_img"></div>
    </div>
  </div>
</template>

<script setup>
import { api_login, api_getTenantInfo } from "@/api/tenant.js";
import { useRouter } from "vue-router";
import { storeToRefs } from 'pinia'
import { store_tenant } from '@/store/tenant.ts'
const store = store_tenant()

const { tenantInfo } = storeToRefs(store)


const formList = ref({
  tenantPhone: "17698789517",
  tenantPassword: "123456",
});
const loading = ref(false);
const router = useRouter();

// 租户登录token
function login() {
  this.loading = true;
  api_login({
    ...this.formList,
  }).then((res) => {
    if (res.code == 200) {
      window.localStorage.setItem("token", res.data.token);
      // 获取租户信息
      this.getTenantInfo()
    }
  });
}
// 获取租户信息
function getTenantInfo() {
  api_getTenantInfo({
    token: window.localStorage.getItem("token"),
  }).then((res) => {
    if (res.code == 200) {
      this.tenantInfo = res.data.tenant
      window.sessionStorage.setItem("tenantInfo", JSON.stringify(this.tenantInfo));
      // 跳转首页增加500ms延迟
      setTimeout(() => {
        this.loading = false;
        router.push({
          path: "/index",
        });
        ElMessage({
          message: "登陆成功！",
          type: "success",
        });
      }, 500);
    }
  });
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  color: black;
}

.left {
  flex: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../../image/OIP.jpeg);
}

.login_form {
  width: 500px;
  height: 500px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.logo {
  background-color: #d2a4a4;
  width: 100px;
  height: 40px;
}

.title {
  width: 100%;
  padding-top: 30px;
  text-align: left;
  font-size: 25px;
}

.subtitle {
  width: 100%;
  padding-top: 10px;
  text-align: left;
  font-size: 14px;
  font-weight: 200;
}

.form {
  padding-top: 40px;
  width: 400px;
}

.right_img {
  flex: 3;
  height: 100vh;
  background-image: url(../../image/right_oip.jpg);
}

.register {
  padding-top: 20px;
  text-align: left;
  font-size: 14px;
}
</style>
