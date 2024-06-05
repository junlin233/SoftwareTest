<script setup>
import { test1 } from '@/mock/four/test1.js'
import { ref, computed } from 'vue'
import { computerSystem } from "@/utils/computerSystem.js";

const system = ref(test1)

const systemData = computed(() => {
    return system.value
})
console.log(system.value)

const loading = ref(false)

const doTest = () => {
    loading.value = true
    system.value.forEach(item => {
        item.actual = computerSystem({ A: item.cpu, B: item.monitor, C: item.peripheral })
        item.state = (item.actual.totalSales === item.totalSales && item.actual.actualCommission === item.actualCommission) ? '测试通过' : '测试不通过'
    })
    loading.value = false
}

const reset = () => {
    system.value.forEach(item => {
        item.actual = ''
        item.state = ''
    })
}

</script>

<template>
    <div class="main-header">
        <div class="button-group">
            <el-button class="main-button" type="success" plain @click="doTest" :loading="loading">进行测试<i
                    class="el-icon-upload el-icon--right"></i></el-button>
            <el-button @click="reset" class="reset-button" type="warning" plain>重置</el-button>
        </div>
    </div>
    <el-table :data="systemData" border style="width: 100%">
        <el-table-column prop="testCaseID" label="testCaseID" min-width="100" />
        <el-table-column prop="cpu" label="主机销售数量" min-width="100" />
        <el-table-column prop="monitor" label="显示器销售数量" min-width="100" />
        <el-table-column prop="peripheral" label="外设销售数量" min-width="100" />
        <el-table-column prop="totalSales" label="期望销售额" min-width="100" />
        <el-table-column prop="actualCommission" label="预期佣金" min-width="100" />
        <el-table-column prop="actual.totalSales" label="实际销售额" min-width="100" />
        <el-table-column prop="actual.actualCommission" label="实际佣金" min-width="100" />
        <el-table-column prop="state" label="测试结果" min-width="100" />
    </el-table>
</template>

<style scoped>
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>