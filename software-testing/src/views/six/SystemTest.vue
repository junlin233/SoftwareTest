<script setup>
import test1 from '@/mock/six/test1.json'
import test2 from '@/mock/six/test2.json'
import test3 from '@/mock/six/test3.json'
import { ref, computed } from 'vue'
import { phoneBill } from "@/utils/phoneBill.js";
const testIndex = ref(0)
const system = ref([test1, test2, test3])
const systemData = computed(() => {
    return system.value[testIndex.value]
})
const options = ref([
    { value: 0, label: "边界值分析" },
    { value: 1, label: "等价类法" },
    { value: 2, label: "决策表" }
])
const loading = ref(false)

const doTest = () => {
    loading.value = true
    system.value[testIndex.value].forEach(item => {
        item.actual = phoneBill({ A: item.time, B: item.count })
        item.state = item.actual.money.toFixed(4) === item.expectedMoney.toFixed(4) ? '测试通过' : '测试不通过'
    })
    loading.value = false
}

const reset = () => {
    system.value[testIndex.value].forEach(item => {
        item.actual = ''
        item.state = ''
    })
}

</script>

<template>
    <div class="main-header">
        <el-select v-model="testIndex" style="width: 200px" placeholder="请选择测试方法">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="button-group">
            <el-button class="main-button" type="success" plain @click="doTest" :loading="loading">进行测试<i
                    class="el-icon-upload el-icon--right"></i></el-button>
            <el-button @click="reset" class="reset-button" type="warning" plain>重置</el-button>
        </div>
    </div>
    <el-table :data="systemData" border style="width: 100%">
        <el-table-column prop="testCaseID" label="testCaseID" min-width="100" />
        <el-table-column prop="time" label="本月通话的分钟数  " min-width="100" />
        <el-table-column prop="count" label="不按时缴费次数" min-width="100" />
        <el-table-column prop="expectedMoney" label="期望话费" min-width="100" />
        <el-table-column prop="actual.money" label="实际话费" min-width="100" />
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