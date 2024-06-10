<template>
    <div class="atm-state-diagram">
        <h1>1 主、备选流关系图</h1>
        <img src="@/assets/9-2.png" alt="9-2" style="width: 600px; height: auto;">
        <p>基本流如下：</p>
        <p>1.销售合同->2.计划需求->3.MPS计算->4.可用库存满足销售需求->5.销售发货管理->6.发完货->7.合同结案</p>
        <p>备选流如下：</p>
        <img src="@/assets/9-3.png" alt="9-3" >
    </div>

    <div class="atm-state-diagram">
        <h1>2 设计场景</h1>
        <p>基于主、备选流设计场景：</p>
        <img src="@/assets/9-4.png" alt="9-4" >
    </div>

    <div class="atm-state-diagram">
        <h1>3 测试用例</h1>
        <img src="@/assets/9-5.png" alt="9-5" style="width: 1000px; height: auto;">
    </div>
</template>

<script setup>

</script>

<style scoped>
.atm-state-diagram {
    font-family: Arial, sans-serif;
}

.state-table h2,
.event-table h2 {
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f4f4f4;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

.atm-state-diagram p,
.atm-state-diagram ul {
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

.atm-state-diagram ul {
    list-style-type: disc;
    padding-left: 20px;
}
</style>