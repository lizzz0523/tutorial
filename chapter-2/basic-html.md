## html，web页面的骨架
html为超文本标记语言，标记语言和我们平时所说的编程语言不同，它的作用不是用来编写程序的，而是通过一系列的标签来标记文档中的不同部分。那什么是标签呢？

* 标签是由尖括号包围的关键词，比如 &lt;html&gt;
* 标签通常是成对出现的，比如 &lt;b&gt; 和 &lt;/b&gt;
* 标签对中的第一个标签是开始标签，第二个标签是结束标签
* 开始和结束标签也被称为开放标签和闭合标签

通过组合不同的标签，形成了html文档。以下是一段基本的html：

```html
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>

  </body>
</html>
```

### 基础标签

|语义|标签|
|-|-|
|通用|**&lt;div&gt;**, **&lt;span&gt;**|
|标题|**&lt;h1&gt;**, **&lt;h2&gt;**, **&lt;h3&gt;**, **&lt;h4&gt;**, **&lt;h5&gt;**, **&lt;h6&gt;**|
|段落|**&lt;p&gt;**|
|章节|**&lt;section&gt;**|
|页眉|**&lt;header&gt;**|
|页脚|**&lt;footer&gt;**|
|导航|**&lt;nav&gt;**|
|图片|**&lt;img&gt;**|

### 列表标签

|语义|标签|
|-|-|
|有序列表|**&lt;ol&gt;**|
|无序列表|**&lt;ul&gt;**|
|列表项|**&lt;li&gt;**|

### 表单标签

|语义|标签|
|-|-|
|表单|**&lt;form&gt;**|
|输入框|**&lt;input&gt;**|
|下拉框|**&lt;select&gt;**|
|下拉选项|**&lt;option&gt;**|

### 完成一个新闻应用的html

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>武院新闻</title>
  </head>
  <body>
    <section>
      <header>
        <h1>武汉学院</h1>
      </header>
      <div>
        <ul>

          <li>
            <div><img src="./cover1.png" /></div>
            <div>
              <h2>我校ACA专业全球统考再创佳绩</h2>
              <p>在刚刚结束的ACA专业全球统考中，我校ACA1601班取得了骄人成绩。该..</p>
            </div>
          </li>

          <li>
            <div><img src="./cover2.png" /></div>
            <div>
              <h2>以评促建 提升本科教学质量  武汉学院召开2017年暑期迎评工作大会</h2>
              <p>7月11日，武汉学院2017年暑期迎评工作大会在马化腾教学楼2102隆重..</p>
            </div>
          </li>

        </ul>
      </div>
      <footer>
        <p>copyright &copy; 2006-2016 whxy</p>
      </footer>
    </section>
  </body>
</html>
```
