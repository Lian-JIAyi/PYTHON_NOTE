# PYTHON

:::    success
  *一定要在 ** 的前面
:::

## **方式
### 第一種
拆解DICT
EX:
```python=
DICT = {'sep' : '???', 'end' : '我是結尾'}
print('hello', 'world', **DICT)
```
sep：間隔符號，end：結尾符號
執行結果：hello???world 我是結尾

---
### 第二種
組成DICT
```python=
def function(**produce):
    print(produce)
fun(name='Bates', age=22, sex='男')
```
==produce 可任意更改==
```python=
produce.setdefault('KEY', 'VALUE') #可利用此方式新增字典
```
執行結果：{'name' : 'Bates', 'age' : 22, 'sex' : '男'}

---
## *args、**kwargs
### *args 固定的位置参數
無數個參數
```python=
def function_1(*args):
    print(args)
function_1("A", "B", "C", "D", "E", "我", "是", "工", "程", "師")
```
執行結果：('A', 'B', 'C', 'D', 'E', '我', '是', '工', '程', '師')

---
### **kwargs 固定的關鍵字参數

::: danger
傳入參數中含有 ? = ?(k1 = "我")
:::
```python=
def test_args(first, second, third,**kwargs):
    print ('First argument: ', first)
    print ('Second argument: ', second)
    print ('Third argument: ', third)
    for k, v in kwargs.items():
      print ('Optional argument %s (*kwargs): %s' % (k, v))

test_args("1st","2nd","3th",k = 5)
```
```python=
執行結果：
First argument:  1st
Second argument:  2nd
Third argument:  3th
Optional argument k (*kwargs): 5
````
::: danger
字典
:::
```python=
def test_args(name, age, sex):
    print ('name argument: ', name)
    print ('age argument: ', age)
    print ('sex argument: ', sex)

kwargs = {
    "name":"apple",
    "age":"banana",
    "sex":"man"
    }
test_args(**kwargs)
```
執行結果：
name argument:  apple
age argument:  banana
sex argument:  man

---
# partial
```python=
from functools import partial

def add(*args, **kwargs):
    for n in args:
        print(n)
    print("-"*20)
    for k, v in kwargs.items():
       print('%s:%s' % (k, v))

add_partial = partial(add, 10, k1=10, k2=20)
add_partial()
```
結合 \*args、\*\*kwargs將變成
partial(函式,參數(\*args),參數(\*\*kwargs))
使用partial呼叫函式並將參數放置後面

---
# 迭代
```python=
class print_ani:
    def __init__(self, list):
        self.list = list

    def __iter__(self):
        self.num = 0
        return self

    def __next__(self):
        if(self.num >= len(self.list)):
            raise StopIteration
        self.num += 1
        return self.list[self.num-1]

print_ani = print_ani(["alpaca","bear","cat"])

print_ani_iter = iter(print_ani)
print(next(print_ani_iter))  # 1
print(next(print_ani_iter))  # 2
print(next(print_ani_iter))  # 3
# raises StopIteration
print(next(print_ani_iter))
```

建立類別print_ani(print動物名稱)
迭代與FOR迴圈相似
但一次只會回傳一個，要迭代下一個需要使用NEXT()函式

---
# FOR 簡寫1
```python=
for_list = [x*x for x in range(3)]
```
x*x(想要再FOR迴圈執行的程式碼) for x in range(3)(FOR迴圈)
:::info
for x in range(3)是不用冒號的
:::
執行結果：for_list = [0, 1, 4] 
由於是用清單方式包住，所以將生成清單狀態
# FOR 簡寫2
```python=
for_list = (x*x for x in range(3))
```
此執行方式，將會把for_list變成一個生成器
但這個生成器，只會在執行時存在，結束運作時，將變回Generator Object一個不存在的物件，包含值

---
# yield
類似一個RETURN的保留字，但跟RETURN不同在於，他將會記住回傳時的位置，下次執行時，在從此開始。使用此方式回傳的值，也是屬於生成器，他將不復存在
```python=
def YIELD_FUN():
    print("starting...")
    while True:
        print("第一次PRINT")
        print("準備YIELD")
        res = yield "我是生成器"
        print("剛剛屬於回傳，因此中斷了迴圈，但因使用YIELD，因此他將此行開始執行")
        print("res:",res,"由於屬於生成器的關係，因此RES是不存在的")
        print("結束")
g = YIELD_FUN()
print(next(g))
print("*"*20)
print(next(g))
```
執行結果：
```python=
starting...
第一次PRINT
準備YIELD
我是生成器
********************
剛剛屬於回傳，因此中斷了迴圈，但因使用YIELD，因此他將此行開始執行
res: None 由於屬於生成器的關係，因此RES是不存在的
結束
第一次PRINT
準備YIELD
我是生成器
```

---
