<template>
    <div class="equivalency-classes">
        <h1>等价类划分</h1>
        <div v-for="(variable, index) in variables" :key="index" class="variable-section">
            <h2>{{ variable.name }}</h2>
            <table class="equivalency-table">
                <thead>
                    <tr>
                        <th>等价类编号</th>
                        <th>有效等价类</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(equivClass, idx) in variable.validClasses" :key="'valid-' + idx">
                        <td>{{ equivClass.id }}</td>
                        <td>{{ equivClass.value }}</td>
                    </tr>
                    <tr v-if="variable.invalidClasses.length" :key="'invalid-' + index">
                        <td>无效等价类</td>
                        <td>{{ variable.invalidClasses.join(', ') }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>强⼀般等价类的个数为10*1*4*1*2*1*1=80 个。</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const variables = ref([
    {
        name: '变量 A',
        validClasses: [
            { id: 'A1', value: '{ 0000 }' },
            { id: 'A2', value: '{ 0001 }' },
            { id: 'A3', value: '{ 0010 }' },
            { id: 'A4', value: '{ 0011 }' },
            { id: 'A5', value: '{ 0100 }' },
            { id: 'A6', value: '{ 0101 }' },
            { id: 'A7', value: '{ 0110 }' },
            { id: 'A8', value: '{ 0111 }' },
            { id: 'A9', value: '{ 1000 }' },
            { id: 'A10', value: '{ 1001 }' }
        ],
        invalidClasses: ['{ 1010, 1011, 1100, 1101, 1110, 1111 }']
    },
    // ... 按照相同的格式添加其他变量的等价类
    {
        name: '变量 B',
        validClasses: [
            { id: 'B1', value: '{ B | 0<=B<2^64, B∈Z }' }
        ],
        invalidClasses: ['{ B | B>=2^64, B∈Z }']
    },
    {
        name: '变量 C',
        validClasses: [
            { id: 'C1', value: '{ "现金查询" }' },
            { id: 'C2', value: '{ "支票查询" }' },
            { id: 'C3', value: '{ "存款" }' },
            { id: 'C4', value: '{ "取款" }' },
        ],
        invalidClasses: ['{ C | C ∉ { "现金查询","支票查询","存款","取款" }']
    },
    {
        name: '变量 D',
        validClasses: [
            { id: 'D1', value: '{ D | 100<=D<=999, D∈Z }' },
        ],
        invalidClasses: [
            '{ D | 0 <= D < 100, D ∈ Z }',
            '{ D | D > 999, D ∈ Z }'
        ]
    }, {
        name: '变量 E',
        validClasses: [
            { id: 'E1', value: '{ E | 200 <= E <= 500, E ∈ Z }' },
            { id: 'E2', value: '{ E | 600 <= E <= 900, E ∈ Z }' }
        ],
        invalidClasses: [
            '{ E | 0 <= E < 200, E ∈ Z }',
            '{ E | 500 < E < 600, E ∈ Z }',
            '{ E | 900 < E, E ∈ Z }'
        ]
    },
    {
        name: '变量 F',
        validClasses: [
            { id: 'F1', value: '{ F | F 是六位字符串 }' }
        ],
        invalidClasses: ['{ F | F 字符串长度小于六或大于六 }']
    },
    {
        name: '变量 G',
        validClasses: [
            { id: 'G1', value: '{ G | G 是256位二进制数 }' }
        ],
        invalidClasses: ['{ G | G 不是256位二进制数 }']
    }


]);
</script>

<style scoped>
.equivalency-classes {
    font-family: Arial, sans-serif;
}

.variable-section {
    margin-bottom: 50px;
}

h1,
h2 {
    color: #333;
}

.equivalency-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.equivalency-table th,
.equivalency-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}

.equivalency-table th {
    background-color: #f4f4f4;
}

.equivalency-table tr:nth-child(even) {
    background-color: #f9f9f9;
}
</style>