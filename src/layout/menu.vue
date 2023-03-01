<template>
    <el-menu default-active="/index" router class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/index">首页</el-menu-item>
        <el-sub-menu>
            <template #title>
                <!-- <el-icon><location /></el-icon> -->
                <span>订单管理</span>
            </template>
            <!-- 子菜单 -->
            <el-menu-item index="/orderList">订单列表</el-menu-item>
            <!-- <el-menu-item index="1-2">item two</el-menu-item> -->
            <!-- <el-menu-item index="1-3">item three</el-menu-item> -->
            <!-- 带有子菜单的子菜单 -->
            <!-- <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
                <el-menu-item index="1-4-2">item two</el-menu-item>
            </el-sub-menu> -->
        </el-sub-menu>
    </el-menu>
</template>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
}
</style>
<script setup>
    
</script>