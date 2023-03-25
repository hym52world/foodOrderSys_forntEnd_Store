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
                <el-button type="primary" @click="onSubmit">查 询</el-button>
            </el-form-item>
        </el-form>

        <!-- 操作 -->
        <el-form :inline="true" :model="params" class="operator">
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查 询</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据表格 -->
        <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="date" label="Date" width="180"></el-table-column>
            <el-table-column prop="name" label="Name" width="180"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
        </el-table>

        <!-- 分页 -->
        <div class="pagination">
            <el-pagination v-model:current-page="pageParams.currentPage" v-model:page-size="pageParams.pageSize"
                :page-sizes="[10, 20, 30, 40]" :total="total" background layout="sizes, prev, pager, next"
                @current-change="handleCurrentChange" @size-change="handleSizeChange" hide-on-single-page />
        </div>

    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { api_listMealSeats } from '@/api/seat.js'


const params = reactive({
    mealSeatsNumber: '',
})
const pageParams = reactive({
    currentPage: 1,
    pageSize: 10,
})
const tableData = ref([])
const total = ref(0)


// 加载时获取数据
onMounted(() => {
    init()
})

const init = async () => {
    const res = await api_listMealSeats({
        pageParams: pageParams,
        params: params,
    })
    tableData.value = res.data.list
    total.value = res.data.total
}


const onSubmit = () => {
    console.log('submit!')
    // 发送请求获取数据
    // 更新tableData和total
    init()
}

const handleCurrentChange = (val) => {
    console.log(`当前页: ${val}`)
    pageParams.currentPage = val
    init()
    // 发送请求获取数据
    // 更新tableData
}
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
    init()
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