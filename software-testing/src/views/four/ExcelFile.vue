<template>
  <div>
    <div class="button-group">
      <div class="input_file"><input type="file" @change="handleFileChange" /></div>
      <div class="button"><el-button class="main-button" type="success" plain @click="doTest" :loading="loading">进行测试<i
            class="el-icon-upload el-icon--right"></i></el-button>
        <el-button @click="reset" class="reset-button" type="warning" plain>重置</el-button>
      </div>
    </div>
    <div v-if="jsonData">
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
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { computerSystem } from "@/utils/computerSystem.js";

const jsonData = ref(null);

function handleFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        // 尝试解析 JSON 数据
        jsonData.value = JSON.parse(e.target.result);
        // 可以在这里访问 jsonData.value 来获取 JSON 中的数据
      } catch (error) {
        console.error('解析 JSON 时出错:', error);
        jsonData.value = null; // 解析失败时，重置 jsonData
      }
    };
    reader.readAsText(file);
  }
}

const systemData = computed(() => {
  return jsonData.value
})

const loading = ref(false)

const doTest = () => {
  loading.value = true
  systemData.value.forEach(item => {
    item.actual = computerSystem({ A: item.cpu, B: item.monitor, C: item.peripheral })
    item.state = (item.actual.totalSales === item.totalSales && item.actual.actualCommission === item.actualCommission) ? '测试通过' : '测试不通过'
  })
  loading.value = false
}

const reset = () => {
  systemData.value.forEach(item => {
    item.actual = ''
    item.state = ''
  })
}


</script>

<style>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.main-button,
.reset-button {
  margin-left: 10px;
}
</style>