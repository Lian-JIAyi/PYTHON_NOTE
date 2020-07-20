# soup.find
可以使用 .text、["類"]土黃色的部分、
```python=
find("a")["href"]  回傳類裡面東西(土黃色)
find("div、a、span、ol、li....紫色部分","只能class=藍色的部分")
find_all("a", {"id":"video-title-link"}) find("紫色的部分",{"特殊的方式可用id、role、title、href土黃色的部分:"值(藍色的部分)")
```
        
# soup.find_all
不可使用 .text、["類"]土黃色的部分、.parent、.next_sibling、.previous_sibling

# 其他soup方式
.parent(找尋該節點的父親節點
.next_sibling(找尋該節點的同一層的下一位節點
.previous_sibling(找尋該節點的同一層的上一位節點
EX:
```python=
<a>
    <b>
        <c>        </c>
        <d>        </d>
    </b>
</a>

<b>的父親節點就是<a>
<c>的兄弟節點下一個就是<d>
<d>的兄弟節點前一個就是<c>
```
