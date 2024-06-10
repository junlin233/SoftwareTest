<script setup>
import test1 from '@/mock/twelve/test1.json'
import { ref, computed } from 'vue'
import { sales } from "@/utils/sales.js";

const system = ref(test1)

const systemData = computed(() => {
    return system.value
})
console.log(system.value)

const loading = ref(false)

const doTest = () => {
    loading.value = true
    system.value.forEach(item => {
        item.actual = sales({ A: item.V, B: item.R, C: item.D })
        item.state = (item.actual.money === item.ExpectedResult ) ? '测试通过' : '测试不通过'
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
        <el-table-column prop="Use Case ID" label="Use Case ID" min-width="100" />
        <el-table-column prop="V" label="年销售额" min-width="100" />
        <el-table-column prop="R" label="现金到帐率" min-width="100" />
        <el-table-column prop="D" label="请假天数" min-width="100" />
        <el-table-column prop="Coverage Combination" label="覆盖组合" min-width="100" />
        <el-table-column prop="Path" label="路径" min-width="100" />
        <el-table-column prop="ExpectedResult" label="预期结果" min-width="100" />
        <el-table-column prop="actual.money" label="实际佣金" min-width="100" />
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