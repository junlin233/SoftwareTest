<script setup>
import { tableData1 } from "@/mock/three/table_1.js";
defineOptions({
    name: 'AnswerPage'
})
</script>

<template>
    <div class="container">
        <h1 class="title">销售管理系统</h1>
        <div class="content">
            <h2>1. 基本边界值法和最坏情况边界值法</h2>
            <ul>
                <li>基本边界值：
                    <p>使用基本边界值的测试方法，则需要使每个不同的输入变量取最小值、略高于最小值、正常值、略低于最大值和最大值，
                        其余变量取正常值。因此对于这道题来说共4个变量（工作时间长短，每年请假的次数，员工在公司的级别，本年度的销售总额）</p>
                    <p>使用基本边界值测试方法，则共有4×4+1=17个测试用例</p><br>
                </li>
                <li>最坏情况边界值法：
                    <p>最坏情况测试拒绝单缺陷假设，它关心的是当多个变量取极值时出现的情况。最坏情况测试中，对每一个输入变量首先进
                        行包含最小值、略高于最小值、正常值、略低于最大值、最大值等5个元素集合的测试，然后对这些集合进行笛卡尔积计算</p>
                    <p>对于这道题共4个变量，使用最坏情况边界值方法则有5^4=625个测试用例</p>
                </li>
            </ul>

            <h2>2. 健壮的边界值测试法</h2>
            <p>若使用健壮的边界值测试法，则需要使每个不同的输入变量取略低于最小值、最小值、略高于最小值、正常值、略低于最大值、
                最大值、略高于最大值。对于“工作时间长短”这个变量的取值范围，考虑到公司成立于2000年初，且使用周期到2035年底，
                可以取0小于等于“工作时间长短”大于等于35（单位：年）。“工作时间长短”为非正常值情况下可取-1和36，测试用例如下：</p>

            <div>
                <el-table :data="tableData1" border style="width: 100%">
                    <el-table-column prop="TestCaseID" label="TestCaseID" min-width="50" />
                    <el-table-column prop="WorkDuration" label="WorkDuration" min-width="100" />
                    <el-table-column prop="LeaveDays" label="LeaveDays" min-width="100" />
                    <el-table-column prop="EmployeeLevel" label="EmployeeLevel" min-width="100" />
                    <el-table-column prop="AnnualSalesAmount" label="AnnualSalesAmount" min-width="100" />
                </el-table>
            </div>

        </div>
    </div>
</template>

<style scoped>
h1,
h2,
h3 {
    color: #333;
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    margin-bottom: 20px
}
</style>