## css，web页面的外表
编写完html后，文档所需要显示的内容已经准备好了。然而，只有“骨架”的web页面是十分吓人的，我们需要给“骨架”一副好看的“皮囊”，这时就需要使用到css层叠样式表了。

css通过一系列的样式规则，来告诉浏览器需要如何显示我们的html。样式规则的书写格式如下：

```css
[selector] {
  [styleName]: [styleValue];
  ...
}
```

* 选择器，用于选中需要进行样式的html标签，例如`body`或者`.app`
* 样式名称，需要设置的样式属性名称，例如需要设置背景颜色，那么样式名称为`background-color`
* 样式值，需要设置的样式属性值，例如需要设置背景颜色为黑色，那么样式值为`#000`或者`black`;

以下是一段用于设置`body`标签的字体样式的css：

```css
body {
  font-family: "Microsoft YaHei";
  font-size: 15px;
  color: #333;
}
```

### 设置颜色

|名称|作用|
|-|-|
|color|字体颜色|
|background-color|背景颜色|
|background-image|背景图|

#### 例子

```css
body {
  color: red;
  background-color: #333;
  background: transparent url(bg.jpg) no-repeat left top;
}
```

### 设置字体

|名称|作用|
|-|-|
|font-family|字体|
|font-size|字体大小|
|font-weight|字体粗细|
|font-style|字体形式：斜体，正体等|
|text-decoration|文字装饰：下划线，删除线等|
|text-align|文字对齐|
|text-indent|文字缩进|
|line-height|行高|

#### 例子

```css
body {
  font-family: "Microsoft YaHei" sans-serif;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
  text-align: center;
  text-indent: 2em;
  line-height: 1.5em;
}
```

### 盒子模型

|名称|作用|
|-|-|
|display|盒子类型|
|width|宽度|
|height|高度|
|margin|外边距|
|padding|内边距|
|border|边框|

#### 例子

```css
.box {
  display: block;
  margin: 5px;
  margin-left: 0px;
  padding: 5px;
  padding-top: 0px;
  border: 1px solid #333;
  border-left: none;
  width: 100px;
  height: 200px;
}
```

### 弹性盒子

|名称|作用|
|-|-|
|flex-direction|主轴方向|
|flex-wrap|是否换行|
|justify-content|主轴对齐方式|
|align-items|交叉轴对齐方式|
|flex-grow|项目放大比例|
|flex-shrink|项目缩小比例|
|align-self|项目对齐方式|

#### 例子

```css
.row {
  display: flex;
  align-items: center;
}
.col {
  flex: 1;
}
```

<sub>注：关于弹性盒子的详细介绍，可以参考阮一峰的[这篇文章](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)和[这篇文章](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

### 给新闻网站编写css

```css
.app {
  font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  font-size: 15px;
}
.app_header {
  height: 44px;
  background: #221e5f url(./logo.svg) no-repeat center center;
}
.app_header h1 {
  font-size: 0;
}
.app_footer {
  padding: 10px;
  color: #ccc;
  font-size: 0.8em;
  text-align: center;
}
.news-list ul {
  padding-left: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.news-list li {
  padding: 10px 0;
  padding-right: 10px;
  border-top: 1px solid #eee;
}
.news-list li:first-child {
  border-top: none;
}
.news {
  display: flex;
}
.news>span {
  margin-right: 10px;
  width: 50px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}
.news>div {
  flex-grow: 1;
  overflow: hidden;
}
.news h2 {
  line-height: 1.2em;
}
.news p {
  margin-top: 6px;
  width: 100%;
  color: #999;
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
