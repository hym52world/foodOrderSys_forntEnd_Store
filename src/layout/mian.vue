<template>
    <div class="layout">
        <!-- element 容器 -->
        <el-container class="container">
            <!-- element 容器header -->
            <el-header class="header">Header</el-header>
            <!-- header下的容器 -->
            <el-container>
                <!-- 左侧 -->
                <el-aside class="aside">aside</el-aside>
                <!-- 容器 -->
                <el-container>
                    <!-- 主窗口 -->
                    <el-main class="main">Main</el-main>
                    <!-- footer -->
                    <el-footer class="footer">Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
  
<script setup>
</script>
<style scoped>
.layout {
    height: 100vh;
}
.container {
    height: calc(100vh);
    width: 100vw;
}
.header {
    height: 70px;
    width: 100%;
    background-color: #388380;
}
.aside {
    width: 200px;
    height: 100%;
    background-color: #c27a7a;
}
.main {
    background-color: #439171;
}
.footer {
    height: 30px;
    width: 100%;
    background-color: #453b3b;
}
</style>