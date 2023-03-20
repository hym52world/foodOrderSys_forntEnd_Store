<template>
    <div class="layout">
        <!-- element 容器 -->
        <el-container class="el_container">
            <!-- element 容器header -->
            <el-header class="header">
                <Header></Header>
            </el-header>
            <!-- header下的容器 -->
            <el-container>
                <!-- 左侧 -->
                <el-aside class="aside">
                    <Menu :isCollapse="isCollapse"></Menu>
                </el-aside>
                <!-- 容器 -->
                <el-container>
                    <!-- 主窗口 -->
                    <el-main class="main">
                        <router-view></router-view>
                    </el-main>
                    <!-- footer -->
                    <el-footer class="footer">Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
  
<script setup>
import Menu from './menu.vue'
import Header from './header.vue'
const isCollapse = ref(false)
</script>
<style scoped>
.layout {
    height: 100vh;
    color: black;
}

.el_container {
    height: calc(100vh);
    width: 100vw;
}

.header {
    height: 60px;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #DCDFE6;
}

.aside {
    border-top: 1px solid #DCDFE6;
    width: 200px;
    height: calc(100vh - 60px);
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
}

.main {
    border-top: 1px solid #DCDFE6;
    background-color: #fff;
    box-sizing: border-box;
}

.footer {
    height: 30px;
    width: 100%;
    background-color: #fff;
    padding: 0;
    border-top: 1px solid #DCDFE6;
}
</style>