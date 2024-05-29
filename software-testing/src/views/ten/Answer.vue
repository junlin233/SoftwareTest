<script setup>
import {tableData1} from "@/mock/ten/table_1.js";
import {tableData2} from "@/mock/ten/table_2.js";
defineOptions({
  name:'AnswerPage'
})

</script>

<template>
    <h1>得到的状态因子表如下</h1>
    <div>
        <el-table :data="tableData1" border style="width: 100%">
            <el-table-column prop="id" label="id" min-width="50" />
            <el-table-column prop="type" label="type" min-width="100" />
            <el-table-column prop="product" label="product" min-width="100" />
            <el-table-column prop="payment" label="payment" min-width="100" />
            <el-table-column prop="invoice" label="invoice" min-width="100" />
            <el-table-column prop="amount" label="amount" min-width="100" />
            <el-table-column prop="status" label="status" min-width="100" />
        </el-table>
    </div>
    <br>

    <h1>得到的正交表如下</h1>
    <div>
        <el-table :data="tableData2" border style="width: 100%">
            <el-table-column prop="case" label="case" min-width="50" />
            <el-table-column prop="type" label="type" min-width="100" />
            <el-table-column prop="product" label="product" min-width="100" />
            <el-table-column prop="payment" label="payment" min-width="100" />
            <el-table-column prop="invoice" label="invoice" min-width="100" />
            <el-table-column prop="amount" label="amount" min-width="100" />
            <el-table-column prop="status" label="status" min-width="100" />
            <el-table-column prop="pairings" label="pairings" min-width="100" />
        </el-table>
    </div>


</template>

<style scoped>
h1{
  font-size: 20px;
  margin-bottom: 10px;
}
</style>