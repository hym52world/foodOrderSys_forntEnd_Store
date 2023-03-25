<template>
    <div class="dialog">
        <!-- 表单 -->
        <el-form :model="formList" ref="form" label-width="100px">
            <el-form-item label="编号/包厢名称" prop="mealSeatsNumber">
                <el-input v-model="formList.mealSeatsNumber" placeholder="请输入餐位编号/包厢名称"></el-input>
            </el-form-item>
            <el-form-item label="楼层" prop="mealSeatsFloor">
                <el-input v-model="formList.mealSeatsFloor" placeholder="请输入餐位楼层"></el-input>
            </el-form-item>
            <el-form-item label="位置" prop="mealSeatsAddress">
                <el-input v-model="formList.mealSeatsAddress" placeholder="请输入餐位位置"></el-input>
            </el-form-item>
            <el-form-item label="包厢" prop="mealSeatsIsRoom">
                <el-switch v-model="formList.mealSeatsIsRoom" active-value="1" inactive-value="0" />
            </el-form-item>
            <el-form-item label="最大容纳人数" prop="mealSeatsMaxPersons">
                <el-input v-model="formList.mealSeatsMaxPersons" placeholder="请输入餐位最大容纳人数"></el-input>
            </el-form-item>
            <!-- 取消 确定 -->
            <el-form-item>
                <!-- <el-button @click="onCancel">取 消</el-button> -->
                <el-button type="primary" @click="onSubmit">提 交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { api_addMealSeats } from '@/api/seat.js'
import { reactive } from 'vue'
import { defineEmits } from 'vue'

// 调用父组件事件
const emit = defineEmits(['close'])

const formList = reactive({
    mealSeatsNumber: '',
    mealSeatsFloor: '',
    mealSeatsAddress: '',
    mealSeatsIsRoom: '0',
    mealSeatsMaxPersons: '',
})
// 提交
const onSubmit = () => {
    console.log('submit!')
    api_addMealSeats({
        params: formList,
    }).then((res) => {
        if (res.code == 200) {
            ElMessage({
                message: "新增成功！",
                type: "success",
            });
            emit('close')
            // 重置表单
            Object.assign(formList, {
                mealSeatsNumber: '',
                mealSeatsFloor: '',
                mealSeatsAddress: '',
                mealSeatsIsRoom: '0',
                mealSeatsMaxPersons: '',
            })
        }
    });

}


</script>
<style scoped>
.dialog {}
</style>