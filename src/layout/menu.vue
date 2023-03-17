<template>
    <el-menu default-active="/index" router class="el-menu-vertical-demo" :collapse="props.isCollapse" @open="handleOpen()"
        @close="handleClose()">
        <el-menu-item index="/index" router="/index">首页</el-menu-item>
        <el-sub-menu>
            <template #title>
                <!-- <el-icon><location /></el-icon> -->
                <span>订单管理</span>
            </template>
            <!-- 子菜单 -->
            <el-menu-item index="/orderList" route="/orderList">订单列表</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>
<script setup>
const props = defineProps(['isCollapse']);
function handleOpen() { };
function handleClose() { };
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
}
</style>
