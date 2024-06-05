<script setup>
import {ref,computed} from 'vue'
import {computerSystem} from "@/utils/computerSystem.js";
const formInput = ref({
  A:'',
  B:'',
  C:'',
})
const expectation = computed(()=>{
  return computerSystem(formInput.value)
})
const loading = ref(false)
const actual = ref('')
const doTest = () =>{
  actual.value = computerSystem(formInput.value)
}

</script>

<template>
  <div class="single-case">
    <el-form
        class="single-form"
        label-width="400px"
        :model="formInput"
    >
      <el-form-item label="主机销售数量">
        <el-input v-model.number="formInput.A"></el-input>
      </el-form-item>
      <el-form-item label="显示器销售数量">
        <el-input v-model.number="formInput.B"></el-input>
      </el-form-item>
      <el-form-item label="外设销售数量">
        <el-input v-model.number="formInput.C"></el-input>
      </el-form-item>
      <el-form-item label="程序预期输出">
        <el-input v-model="expectation.result" disabled></el-input>
      </el-form-item>
      <el-form-item label="销售总额">
        <el-input v-model="expectation.totalSales" disabled></el-input>
      </el-form-item>
      <el-form-item label="佣金金额">
        <el-input v-model="expectation.actualCommission" disabled></el-input>
      </el-form-item>
      
    </el-form>
    <el-button
        class="main-button"
        type="success"
        plain
        @click="doTest"
        :loading="loading"
    >
      进行测试
    </el-button>
    <div class="actual">
      <span>{{ actual }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">


.single-case{
  display: flex;
  flex-direction: column;
  align-items: center;

}
.single-form{
  width: 800px;
  transform: translate(-20%,0);
}
.main-button{
  margin-bottom: 50px;
}
.actual{
  margin: 0 auto;
}

</style>