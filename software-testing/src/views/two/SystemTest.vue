<script setup>
import system_1 from '@/mock/two/system_1.json'
import system_2 from '@/mock/two/system_2.json'
import system_3 from '@/mock/two/system_3.json'
import { ref,computed } from 'vue'
import {nextDay} from "@/utils/nextDay.js";
const testIndex = ref(0)
const system = ref([system_1,system_2,system_3])
const systemData = computed(()=>{
  return system.value[testIndex.value]
})
const options = ref([
  { value: 0, label: "健壮性边界分析" },
  { value: 1, label: "等价类法" },
  {value: 2,label: '决策表法'}
])
const loading = ref(false)

const doTest =  () =>{
  loading.value = true
  system.value[testIndex.value].forEach(item =>{
    item.actual = nextDay(item)
    item.state = String(item.actual) === item.expectation ? '测试通过':'测试不通过'
  })
  loading.value = false
}

const reset = () =>{
  system.value[testIndex.value].forEach(item =>{
    item.actual = ''
    item.state = ''
  })
}

</script>

<template>
  <div class="main-header">
    <el-select v-model="testIndex" style="width: 200px" placeholder="请选择测试方法">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      />
    </el-select>
    <div class="button-group">
      <el-button
          class="main-button"
          type="success"
          plain
          @click="doTest"
          :loading="loading"
      >进行测试<i class="el-icon-upload el-icon--right"></i
      ></el-button>
      <el-button
          @click="reset"
          class="reset-button"
          type="warning"
          plain
      >重置</el-button
      >
    </div>
  </div>
  <el-table :data="systemData" border style="width: 100%">
    <el-table-column prop="id" label="id" min-width="100" />
    <el-table-column prop="year" label="年" min-width="100" />
    <el-table-column prop="month" label="月" min-width="100" />
    <el-table-column prop="day" label="日" min-width="100" />
    <el-table-column prop="expectation" label="期望输出" min-width="100" />
    <el-table-column prop="actual" label="实际输出" min-width="100" />
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