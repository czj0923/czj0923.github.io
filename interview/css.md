---
title: css
date: 2022/07/07
---

## 垂直水平居中
### absolute + 负margin（定宽高）
```
position:absolute;
top:50%;
left:50%;
margin-left:-50px;
margin-top:-50px;
```
### absolute + margin auto（定宽高）
```
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
margin:auto;
```
### absolute + calc（定宽高）
```
position:absolute;
top: calc(50% - 50px);
left: calc(50% - 50px);
```
### flex布局（不定宽高）
```
display:flex;
align-items:center;
justify-content:center;
```
### absolute + transform（不定宽高）
```
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
```
### lineheight + text-aign（行内元素）
```
line-height:1;
text-align:center;
```
### grid布局
```
display:grid;

align-self:center;
justify-self:center;
```

## 两栏布局
### flex布局
```
.outer{
    display:flex;
}
.right{
    flex:1;
}
```
### float + BFC
```
.left{
    float:left;
}
.right{
    overflow:hidden;
}
```
### float + margin
```
.left{
    float:left;
}
.right{
    margin-left:100px;
}
```
### float + calc
```
.left{
    float:left;
}
.right{
    float:left;
    width:calc(100% - 100px);
}
```
### 左侧position + margin
```
.outer{
    position:relative;
}
.left{
    position:absolute;
}
.right{
    margin-left:100px;
}
```
### 右侧position
```
.outer{
    position:relative;
}
.right{
    position:absolute;
    left:100px;
    top:0;
    right:0;
}
```
### table布局
```
.outer{
    display:table;
    width:100%;
}
.left,.right{
    display:table-cell;
}
```
## 三栏布局
- flex布局，父元素display:flex;中间元素flex:1;
- float+margin，左侧左浮动，右侧右浮动，中间元素用margin空出两边
- float+BFC，左侧左浮动，右侧右浮动，中间用overflow:hidden;创建BFC
- positon，父元素position:relative;左元素position:absolute; top:0;left:0;, 右元素position:absolute; top:0;right:0; 中间元素用margin空出两边
- table布局
- 双飞翼布局
- 圣杯布局

## BFC
BFC是Block Formatting Context的缩写，又叫块级格式化上下文，它是一块独立渲染的区域，里面的布局不会和外面发生相互影响

###### 触发bfc的方法
- html根标签
- overflow不为visible
- float不为none
- position为fixed或absolute
- display为flex,inline-flex,table-cell,inline-block

###### BFC的作用
- 清除元素内部的浮动
- 防止margin塌陷
- 不和浮动元素重叠

## css选择器有哪些

| 选择器 | 权重 |
| --- | --- |
| id选择器 | 100 |
| 类选择器 | 10 |
| 属性选择器 | 10 |
| 伪类选择器 | 10 |
| 标签选择器 | 1 |
| 伪元素选择器 | 1 |
| 相邻兄弟选择器 | 0 |
| 子选择器 | 0 |
| 后代选择器 | 0 |
| 通配符选择器 | 0 |

!important权重最大，行内样式权重1000

## 对盒模型的理解
盒模型有两种，标准盒模型和ie盒模型
标准盒模型的width和height就是content的宽高，ie盒模型的width和height包括border，padding和content
默认是标准盒模型，可以使box-sizing:border-box;来开启ie盒模型

## 清除浮动的方法
- 给父元素给定高度
- 给父元素添加overflow:hidden;创建BFC
- 额外标签设置clear:both;
- 双伪元素


