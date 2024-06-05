<script setup>
import {ref,computed} from 'vue'
import {phoneBill} from "@/utils/phoneBill.js";
const formInput = ref({
  A:'',
  B:'',
  C:'',
})
const expectation = computed(()=>{
  return phoneBill(formInput.value)
})
const loading = ref(false)
const actual = ref('')
const doTest = () =>{
  actual.value = phoneBill(formInput.value)
}

</script>

<template>
  <div class="single-case">
    <el-form
        class="single-form"
        label-width="400px"
        :model="formInput"
    >
      <el-form-item label="通话时长">
        <el-input v-model.number="formInput.A"></el-input>
      </el-form-item>
      <el-form-item label="不按时缴费次数">
        <el-input v-model.number="formInput.B"></el-input>
      </el-form-item>
      <el-form-item label="程序预期输出">
        <el-input v-model="expectation.result" disabled></el-input>
      </el-form-item>
      <el-form-item label="话费金额">
        <el-input v-model="expectation.money" disabled></el-input>
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