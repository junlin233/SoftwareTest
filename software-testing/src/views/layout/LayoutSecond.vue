<script setup>
import router from "@/router/index.js";
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const activeName = computed(() => {
  const pathSegments = route.path.split('/');
  return pathSegments.slice(-2)
});
const simple = ['one','two']
const isShow = computed(()=>{
  return simple.includes(activeName.value[0])
})

const handleTabClick = (tab) =>{
  router.push(tab.props.name)
}
</script>

<template>
  <div class="ball"></div>
  <el-tabs style="height: 100%;" v-model="activeName[1]" class="demo-tabs" @tab-click="handleTabClick" type="border-card">
    <el-tab-pane label="问题描述" name="question" ><router-view></router-view></el-tab-pane>
    <el-tab-pane v-if="isShow" label="单元测试" name="system"><router-view></router-view></el-tab-pane>
    <el-tab-pane v-if="isShow" label="单个测试" name="single"><router-view></router-view></el-tab-pane>
    <el-tab-pane v-if="isShow" label="excel" name="excel"><router-view></router-view></el-tab-pane>
    <el-tab-pane v-if="isShow" label="bug" name="bug"><router-view></router-view></el-tab-pane>
  </el-tabs>

</template>

<style scoped lang="less">
 :deep(.el-tabs__item) {
   width: 150px;
   height: 50px;
   font-size: 15px;
}
 .ball{
   height: 100px;
   width: 100px;
   background: linear-gradient(45deg,pink,yellow,pink);
   border-radius: 50px;
   position: absolute;
   animation: actionX 3.6s infinite linear alternate,
   actionY 2000ms infinite linear alternate;
   z-index: 100;
   &::after{
     display: block;
     content: '';
     background:  linear-gradient(45deg,pink,yellow,pink);
     z-index: -1;
     inset: -5px;
     border-radius: 50px;
     position: absolute;
     opacity: 1;
     filter: blur(10px);
   }
 }
 @keyframes actionX {
   0%{
     left: 0;
   }
   100%{
     left: 91%
   }
 }
 @keyframes actionY {
   0%{
     top:0;
   }
   100%{
     top: 89%
   }
 }
</style>