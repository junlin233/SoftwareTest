<script setup>
defineOptions({
    name: 'AnswerPage'
})

import MarkdownIt from 'markdown-it';
import 'github-markdown-css';

let md = new MarkdownIt();
let test2 = `
| 编号 | 代码块 |
| ---- | ------ |
| 1    | \` unsigned Zcode, Bcode; int i, j, k, Rec, Color; long Len; char Buf[72];\` |
| 2    | \` while (*Str)\` |
| 3    | \`if ((*Str & 0x80) && (*(Str+1) & 0x80))\` |
| 4    | \`Zcode = (*Str - 0xa1) & 0x07f; Bcode = (*(Str + 1) - 0xa1) & 0x07f; Rec = Zcode * 94 + Bcode; Len = Rec * 72L;\` |
| 5    | \`fseek(fp, Len, SEEK_SET);\` |
| 6    | \`fread(Buf, 1, 72, fp);\` |
| 7    | \`for (i = 0; i < 24; i++)\` |
| 8    | \`for (j = 0; j < 3; j++)\` |
| 9    | \`for (k = 0; k < 8; k++)\` |
| 10   | \`if (Buf[i * 3 + j] >> (7 - k) & 1)\` |
| 11   | \`Color = y + j * 8 + k - 46;\` |
| 12   | \`PutPoint(x + i, y + j * 8 + k, Color);\` |
| 13   | \`k++\` |
| 14   | \`j++\` |
| 15   | \`i++\` |
| 16   | \`x = x + 24 + Wid; Str += 2;\` |
| 17   | \`return\` |
`;

var result2 = md.render(test2); //传入文本

</script>

<template>
    <div class="container">
        <h1 class="title">构建程序图</h1>
        <div class="content">
            <h2>1. 程序解释</h2>
            <ul>
                <P>这段代码定义了一个名为 ModuleX 的函数，它用于处理并显示字符串 Str 的字符图像。函数的主要功能是解析和绘制字符串中
                    的字符。该函数的主要流程是读取并解析字符串中的双字节字符（假设为汉字），从文件中获取对应字符的图像数据，
                    并绘制到指定位置。函数通过调整坐标和字符串指针来逐个处理字符，最终实现字符串的图像输出。</P><br>
            </ul>
            <h2>2. 流程图绘制</h2>
            <ul>
                <li>程序分块
                </li>
                <div v-html="result2" class="markdown-body" style="font-size: small"></div><br>
                <li>流程控制图
                    <ul>
                        根据上面的分块，我们可以得到具体的程序控制图如下所示
                    </ul>
                    <ul>
                        <img src="@/assets/11-1.png" alt="11-1">
                    </ul>
                </li>
            </ul>

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