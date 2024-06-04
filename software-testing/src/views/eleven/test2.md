| 编号 | 代码块 |
| ---- | ------ |
| 1    | `unsigned Zcode, Bcode; int i, j, k, Rec, Color; long Len; char Buf[72];` |
| 2    | `while (*Str)` |
| 3    | `if ((*Str & 0x80) && (*(Str+1) & 0x80))` |
| 4    | `Zcode = (*Str - 0xa1) & 0x07f; Bcode = (*(Str + 1) - 0xa1) & 0x07f; Rec = Zcode * 94 + Bcode; Len = Rec * 72L;` |
| 5    | `fseek(fp, Len, SEEK_SET);` |
| 6    | `fread(Buf, 1, 72, fp);` |
| 7    | `for (i = 0; i < 24; i++)` |
| 8    | `for (j = 0; j < 3; j++)` |
| 9    | `for (k = 0; k < 8; k++)` |
| 10   | `if (Buf[i * 3 + j] >> (7 - k) & 1)` |
| 11   | `Color = y + j * 8 + k - 46;` |
| 12   | `PutPoint(x + i, y + j * 8 + k, Color);` |
| 13   | `k++` |
| 14   | `j++` |
| 15   | `i++` |
| 16   | `x = x + 24 + Wid; Str += 2;` |
| 17   | `return` |