<script setup>
import {ref,computed} from 'vue'
import {nextDay} from "@/utils/nextDay.js";
const formInput = ref({
  year:'',
  month:'',
  day:'',
})
const expectation = computed(()=>{
  return nextDay(formInput.value)
})
const loading = ref(false)
const actual = ref('')
const doTest = () =>{
  actual.value = nextDay(formInput.value)
}

</script>

<template>
  <div class="single-case">
    <el-form
        class="single-form"
        label-width="400px"
        :model="formInput"
    >
      <el-form-item label="输入年">
        <el-input v-model.number="formInput.year"></el-input>
      </el-form-item>
      <el-form-item label="输入月">
        <el-input v-model.number="formInput.month"></el-input>
      </el-form-item>
      <el-form-item label="输入日">
        <el-input v-model.number="formInput.day"></el-input>
      </el-form-item>
      <el-form-item label="程序预期输出">
        <el-input v-model="expectation" disabled></el-input>
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
      <span>实际输出：{{actual}}</span>
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