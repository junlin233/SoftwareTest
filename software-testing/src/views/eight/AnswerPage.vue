<template>
    <div class="atm-state-diagram">
        <h1>1 ATM 状态转换图</h1>

        <!-- 状态表格 -->
        <div class="state-table">
            <h2>状态表</h2>
            <table>
                <thead>
                    <tr>
                        <th>状态编号</th>
                        <th>状态名称</th>
                        <th>状态说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="state in states" :key="state.id">
                        <td>{{ state.id }}</td>
                        <td>{{ state.name }}</td>
                        <td>{{ state.description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 事件表格 -->
        <div class="event-table">
            <h2>事件表</h2>
            <table>
                <thead>
                    <tr>
                        <th>事件编号</th>
                        <th>事件名称</th>
                        <th>事件说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event in events" :key="event.id">
                        <td>{{ event.id }}</td>
                        <td>{{ event.name }}</td>
                        <td>{{ event.description }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h1>状态转换图如下：</h1>
        <img src="@/assets/8-1.png" alt="8-1" style="width: 1000px; height: auto;">
    </div>

    <div class="atm-state-diagram">
        <h1>2 ATM 状态树</h1>
        <p>
            将状态转换图（State Transition Diagram）转换为转换树（Transition Tree）的过程包括以下步骤：
        </p>
        <ul>
            <li>选择状态图中的初始状态，作为转换树的根节点。</li>
            <li>从初始状态开始，识别所有可能的事件和状态转换。</li>
            <li>每当一个事件发生并导致状态转换时，在树中添加一个新的分支，表示从当前状态到下一个状态的转换。</li>
            <li>如果某个状态已经在路径中出现，避免重复或形成循环。</li>
            <li>如果到达终止状态（如完成交易或取消操作），结束该分支。</li>
            <li>继续扩展树的每一个分支，直到所有可能的事件和状态转换都被考虑。</li>
        </ul>
        <p>得到的转换树如下：（部分重复省略）</p>
        <img src="@/assets/8-2.png" alt="8-2" style="width: 1000px; height: auto;">
    </div>

    <div class="atm-state-diagram">
        <h1>3 测试用例</h1>
        <img src="@/assets/8-3.png" alt="8-3" style="width: 1000px; height: auto;">
    </div>
</template>

<script setup>
import { ref } from 'vue';

const states = ref([
    { id: 1, name: '空闲', description: '系统空闲，等待用户操作' },
    { id: 2, name: '检查银行卡', description: '卡片已插入，检查是否正常' },
    { id: 3, name: '第一次输入密码', description: '用户第一次输入密码' },
    { id: 4, name: '第二次输入密码', description: '密码输入错误一次，用户第二次输入密码' },
    { id: 5, name: '第三次输入密码', description: '密码输入错误两次，用户第三次输入密码' },
    { id: 6, name: '选择业务', description: '用户选择需要使用的业务' },
    { id: 7, name: '查询业务', description: '进行查询操作' },
    { id: 8, name: '存款业务', description: '进行存款操作' },
    { id: 9, name: '取款业务', description: '进行取款操作' },
    { id: 10, name: '退卡', description: '系统退卡' },
    { id: 11, name: '吞卡', description: '密码输入错误三次，系统吞卡' }
]);

const events = ref([
    { id: 1, name: '插入银行卡', description: '用户插入银行卡，系统准备检查' },
    { id: 2, name: '检查银行卡成功', description: '系统检查银行卡正常，等待用户输入密码' },
    { id: 3, name: '检查银行卡失败', description: '系统检查银行卡错误，进入退卡' },
    { id: 4, name: '第一次输入密码错误', description: '密码输入错误，用户进入第二次密码输入' },
    { id: 5, name: '第一次输入密码成功', description: '用户第一次输入密码成功，进入业务选择' },
    { id: 6, name: '第二次输入密码错误', description: '密码输入错误，用户进入第三次密码输入' },
    { id: 7, name: '第二次输入密码成功', description: '用户第二次输入密码成功，进入业务选择' },
    { id: 8, name: '第三次输入密码错误', description: '密码输入错误，系统进入吞卡状态' },
    { id: 9, name: '第三次输入密码成功', description: '用户第三次输入密码成功，进入业务选择' },
    { id: 10, name: '选择查询', description: '用户选择查询业务' },
    { id: 11, name: '选择存款', description: '用户选择存款业务' },
    { id: 12, name: '选择取款', description: '用户选择取款业务' },
    { id: 13, name: '继续业务', description: '用户返回选择业务界面' },
    { id: 14, name: '结束业务', description: '用户结束当前业务，退出系统' }
]);
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