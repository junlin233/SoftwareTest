<script setup>
import {Menu} from "@element-plus/icons-vue";
import {computed} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
const path = route.path.split('/')
const index = computed(()=>{

  console.log(path[path.length - 2])
  return '/'+path[path.length - 2]
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <el-menu
            router
            class="el-menu-vertical-demo"
            background-color="#fff"
            text-color="black"
            active-text-color='blue'
            :default-active="index"
            :default-openeds="['1']"
            >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Menu/></el-icon>
              <span>课程练习</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/one">1.判断三角形类型</el-menu-item>
              <el-menu-item index="/two">2.万年历问题</el-menu-item>
              <el-menu-item index="/three">3.销售管理系统</el-menu-item>
              <el-menu-item index="/four">4.电脑销售系统</el-menu-item>
              <el-menu-item index="/five">5.电商平台系统</el-menu-item>
              <el-menu-item index="/six">6.电信收费问题</el-menu-item>
              <el-menu-item index="/seven">7.实时C/S系统</el-menu-item>
              <el-menu-item index="/eight">8.ATM系统</el-menu-item>
              <el-menu-item index="/nine">9.ERP系统</el-menu-item>
              <el-menu-item index="/ten">10.实时Web系统</el-menu-item>
              <el-menu-item index="/eleven">11.构建程序图</el-menu-item>
              <el-menu-item index="/twelve">12.销售系统</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
        </el-aside>
      <el-container>
        <el-header>软件测试练习</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>




<style scoped lang="less">
.el-container{
  height: 100vh;
  .el-aside{
    width: 200px;
    background-color: #fff;
  }
  .el-header{
    height: 60px;
    line-height: 60px;
    background-color: #fff;
  }
  .el-main{
    padding: 0;
    margin: 20px;
    background-color: #fff;
  }
}


</style>