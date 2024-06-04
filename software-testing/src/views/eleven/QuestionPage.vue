<script setup>
import MarkdownIt from 'markdown-it';
import 'github-markdown-css';

let md = new MarkdownIt();
let test1 = `\`\`\`c
void ModuleX (int x, int y, int Wid, char *Str)
{
    unsigned Zcode, Bcode;                    
    int i, j, k, Rec, Color;
    long Len;
    char Buf[72];
    while (*Str)
    {
        if ((*Str & 0x80) && (*(Str+1) &0x80))
        {
            Zcode = (*Str-0xa1) & 0x07f;          
            Bcode = (*(Str+1)-0xa1) & 0x07f;      
            Rec = Zcode*94+Bcode;                 
            Len = Rec*72L;                        
            fseek(fp, Len, SEEK_SET);
            fread(Buf, 1, 72, fp);               
            for (i = 0; i < 24; i++) 
              for (j = 0; j < 3; j++) 
                for (k = 0; k < 8; k++) 
                  if (Buf[i*3+j] >> (7-k) & 1) 
                  {
                    Color = y+j*8+k-46;
                    PutPoint(x+i, y+j*8+k, Color);
                  }
                  x = x+24+Wid;
                  Str += 2;
        }
    }
    return;
}`;

var result = md.render(test1); //传入文本

</script>

<template>
    <div class="container">
        <h1 class="title">构建程序图</h1>
        <div class="content">
            <p>需求描述如下：</p>
            <p>
                按照下列C语言程序前的编号，构建起程序图（control flow graph or program diagram）
                ，不需要理解具体的代码实现内容，只要理解其逻辑即可。</p>
            <div v-html="result" class="markdown-body" style="font-size: small"></div>
        </div>
    </div>

</template>

<style scoped></style>