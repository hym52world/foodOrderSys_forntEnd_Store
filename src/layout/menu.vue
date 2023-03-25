<template>
    <el-menu :default-active="activeMenu" router class="el-menu-vertical-demo" :collapse="props.isCollapse"
        @open="handleOpen()" @close="handleClose()" unique-opened>
        <el-menu-item index="/index" key="/index">首页</el-menu-item>
        <el-sub-menu index="order" key="order">
            <template #title>
                <span>订单管理</span>
            </template>
            <el-menu-item index="/orderList" key="/orderList">订单列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="seat" key="seat">
            <template #title>
                <span>餐位管理</span>
            </template>
            <el-menu-item index="/seatList" key="/seatList">餐位列表</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const activeMenu = computed(() => route.path)
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
