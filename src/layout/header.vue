<template>
  <div class="header">

    <div class="logo">
      <img src="@/assets/vue.svg" alt="" />
    </div>

    <div class="right">
      <div class="avatar">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar :src="tenantInfo.tenantLogo" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>租户中心</el-dropdown-item>
              <el-dropdown-item @click="logout()">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { api_logout } from '@/api/tenant'
import { useRouter } from "vue-router";
const tenantInfo = ref(JSON.parse(window.sessionStorage.getItem('tenantInfo')))
const router = useRouter();

// 退出登录
function logout() {

  api_logout().then((res) => {
    if (res.code == 200) {

      ElMessage({
        message: "退出成功！",
        type: "success",
      });
      window.localStorage.removeItem('token')
      window.sessionStorage.removeItem('tenantInfo')
      router.push({
        path: '/login'
      })
    }
  });

}
</script>

<style scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
}

.right {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
}
</style>