<script setup>
import router from "@/router/index.js";
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const activeName = computed(() => {
  const pathSegments = route.path.split('/');
  return pathSegments.slice(-2)
});

// 为了避免没有写的页面路由跳转出问题，先关闭别的页面的路由跳转
// 新增页面后，根据是否实现，选择放入的位置
const simple = ['one','two']
const simple2 = ['three','five','ten','eleven']
const isShow = computed(()=>{
  return simple.includes(activeName.value[0])
})
const isShow2 = computed(()=>{
  return simple2.includes(activeName.value[0])
})

const handleTabClick = (tab) =>{
  router.push(tab.props.name)
}
</script>

<template>
  <div class="ball"></div>
  <el-tabs style="height: 100%; border: none" v-model="activeName[1]" class="demo-tabs" @tab-click="handleTabClick" type="border-card">
    <el-tab-pane label="问题描述" name="question" ><router-view></router-view></el-tab-pane>
    <el-tab-pane v-if="isShow" label="单元测试" name="system"><router-view></router-view></el-tab-pane>
    <el-tab-pane v-if="isShow" label="单个测试" name="single"><router-view></router-view></el-tab-pane>
    <el-tab-pane v-if="isShow" label="excel" name="excel"><router-view></router-view></el-tab-pane>
    <el-tab-pane v-if="isShow" label="bug" name="bug"><router-view></router-view></el-tab-pane>
    <el-tab-pane v-if="!isShow&&isShow2" label="题目解答" name="answer"><router-view></router-view></el-tab-pane>
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
     left: calc(100% - 125px)
   }
 }
 @keyframes actionY {
   0%{
     top:0;
   }
   100%{
     top:calc(100% - 125px)
   }
 }
</style>