<script setup>
defineOptions({
  name:'AnswerPage'
})
</script>

<template>
  <div class="container">
    <h1 class="title">电商平台边界值测试</h1>
    <div class="content">
      <h2>1. 系统级别</h2>
      <ul>
        <li>用户注册和登录系统：
          <ul>
            <li>测试同时进行的最大用户注册请求数。</li>
            <li>测试同一用户连续登录的最短时间间隔和最长时间间隔。</li>
          </ul>
        </li>
        <li>产品搜索系统：
          <ul>
            <li>测试搜索关键词的最短长度（如1个字符）和最长长度（如255个字符）。</li>
            <li>测试搜索结果的边界值，如0个结果和最大显示结果数。</li>
          </ul>
        </li>
        <li>支付系统：
          <ul>
            <li>测试最低和最高支付金额。</li>
            <li>测试并发支付请求的边界值，如同时发起的最大支付请求数。</li>
          </ul>
        </li>
      </ul>
      <h2>2. 类级别</h2>
      <ul>
        <li>购物车类：
          <ul>
            <li>添加产品到购物车时，测试购物车的最小和最大容量。</li>
            <li>计算购物车总金额时，测试空购物车和满购物车的情况。</li>
          </ul>
        </li>
        <li>订单处理类：
          <ul>
            <li>测试订单金额的边界值，如最小订单金额（免费订单）和最大订单金额。</li>
            <li>测试订单状态的边界值，如订单从“已创建”到“已支付”再到“已发货”的状态转变。</li>
          </ul>
        </li>
      </ul>

      <h2>3. 函数方法级别</h2>
      <ul>
        <li>用户输入验证：
          <ul>
            <li>输入用户名时，测试最短允许长度和最长允许长度的用户名。</li>
            <li>输入密码时，测试最短允许长度和最长允许长度的密码，以及特殊字符的使用。</li>
          </ul>
        </li>
        <li>产品价格计算：
          <ul>
            <li>测试最小和最大产品价格（如0.01和99999.99）。</li>
            <li>测试折扣计算中的边界值，例如100%的折扣和0%的折扣。</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

h1,
h2,h3 {
  color: #333;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  margin-bottom: 20px
}
</style>