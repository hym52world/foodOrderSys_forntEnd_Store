<template>
    <div class="view">
        <!-- 查询表单 -->
        <el-form :inline="true" :model="params" class="form">
            <el-form-item label="编号">
                <el-input v-model="params.mealSeatsNumber" placeholder="请输入餐位编号" />
            </el-form-item>
            <!-- <el-form-item label="Activity zone">
                <el-select v-model="params.region" placeholder="Activity zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item> -->
            <el-form-item>
                <el-button type="primary" @click="onSubmit">
                    <i-ep-Search />
                    查 询
                </el-button>
            </el-form-item>
        </el-form>

        <!-- 操作 -->
        <el-form :inline="true" class="operator">
            <el-form-item>
                <el-button type="primary" @click="addSeat"><i-ep-Plus />新 增</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据表格 -->
        <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="mealSeatsNumber" label="编号/包厢名称"></el-table-column>
            <el-table-column prop="mealSeatsFloor" label="楼层"></el-table-column>
            <el-table-column prop="mealSeatsAddress" label="位置"></el-table-column>
            <el-table-column prop="mealSeatsIsRoom" label="包厢">
                <template #default="scope">
                    <el-tag v-if="scope.row.mealSeatsIsRoom == '1'" type="success">是</el-tag>
                    <el-tag v-else>否</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="editSeat(scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" @click="deleteSeat(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
        <div class="pagination">
            <el-pagination v-model:current-page="pageParams.currentPage" v-model:page-size="pageParams.pageSize"
                :page-sizes="[10, 20, 30, 40]" :total="total" background layout="sizes, prev, pager, next"
                @current-change="handleCurrentChange" @size-change="handleSizeChange" hide-on-single-page />
        </div>

        <!-- 弹窗 -->
        <el-dialog v-model="dialogVisible" :title="title" :width="dialogWidth">
            <seatAdd v-if="title == '新增餐位'" @close="closeDialog" />
        </el-dialog>


    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { api_listMealSeats } from '@/api/seat.js'
import seatAdd from './seatAdd.vue'

// 定义数据
const params = reactive({
    mealSeatsNumber: '',
})
const pageParams = reactive({
    currentPage: 1,
    pageSize: 10,
})
const tableData = ref([])
const total = ref(0)
const dialogVisible = ref(false)
const title = ref('')
const dialogWidth = ref('30%')

// 加载时获取数据
onMounted(() => {
    init()
})

// 初始化
const init = async () => {
    const res = await api_listMealSeats({
        pageParams: pageParams,
        params: params,
    })
    tableData.value = res.data.list
    total.value = res.data.total
}

// 提交
const onSubmit = () => {
    console.log('submit!')
    // 发送请求获取数据
    // 更新tableData和total
    init()
}

// 翻页
const handleCurrentChange = (val) => {
    console.log(`当前页: ${val}`)
    pageParams.currentPage = val
    init()
    // 发送请求获取数据
    // 更新tableData
}

// 每页显示条数改变时触发
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
    init()
}

// 新增餐位
const addSeat = () => {
    dialogVisible.value = true
    title.value = '新增餐位'
}

// 关闭弹窗
const closeDialog = () => {
    dialogVisible.value = false
    init()
}

// 编辑餐位
const editSeat = (row) => {
    console.log(row)
}

// 删除餐位
const deleteSeat = (row) => {
    console.log(row)
}
</script>

<style scoped>
.view {
    padding: 20px;
}

.form {
    width: 100%;
    display: flex;
}

.operator {
    width: 100%;
    display: flex;
    justify-content: right;
}

.pagination {
    padding-top: 20px;
    display: flex;
    justify-content: right;
}
</style>