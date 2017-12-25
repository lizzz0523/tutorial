## 什么是web

### 从浏览器输入一个地址到最终打开一个web应用都发生了那些事

日常我们都会上网，看看新闻、看看电影或者在社交网站和朋友交流。那大家有没有想过，这些我们经常打开的web应用，是如何呈现在我们面前的呢？为了让大家对web的原理有一个大概的了解，我们先来看一个简单的问题：从浏览器输入一个地址到最终打开一个web应用都发生了那些事？

* 输入需要访问的url
* 浏览器根据url查找本地**有效缓存**
* 浏览器解析url，并根据url的不同部分，组装成**http请求**
* 浏览器根据请求的域名部分，查找对应web服务器的**ip地址**
  * 浏览器从自身的dns缓存中查找
  * 浏览器从本地的host文件中查找
  * 浏览器从网络上的dns服务器中查找
* 浏览器根据ip地址和端口，建立**tcp链接**，并将请求发送到web服务器
* web服务器接收到http请求后，根据请求的内容作出相应的**处理**
  * 查找对应的文件资源
  * 查找对应的处理程序并执行
* web服务器把处理的结果组装成**http响应**并原路返回给浏览器
* 浏览器把获得的响应**显示**给用户，并**缓存**至本地

## web服务器和浏览器

### web服务器
web服务器实际上是指运行在服务端机器上的web服务器程序。常见的web服务器程序有：

* apache
* nginx
* lighthttpd
* tomcat
* iis

要开发一个web应用，首先需要有自己的服务器，并且在上面安装好对应的web服务器程序。

<sub>注：除了web服务器程序，我们还可以在服务器上安装ftp服务器程序，邮件服务器程序等不同的程序来提供相应的服务</sub>

### 浏览器
浏览器其实只是多种web客户端中的最常见的一种，除此以外还有：

* linux上的curl程序
* ios上的UIWebView和WKWebView组件
* android上的WebView组件

它们的功能都大致相同，组装http请求，发送到服务器，并解析http响应。

## 什么是web页面

### web页面的基本构成（html/css/js）
web页面其实也是http响应的一种。一个web应用包含一个或者多个web页面，而一个web页面则是由多个不同的文件组成，其中最主要的是一个html文件，它包含了一个web页面的完整内容。

除此以外html文件中还包含了web页面中所需的其他资源文件的url地址，浏览器会根据这些文件的url地址逐个加载。而这些资源文件中，又以css文件和js文件最为重要。

html为**hyber text markup language**的首字母缩写，意思为超文本标记语言。html文件通过一系列标签来标记web页面的结构和内容，是web页面的骨架。

css为**cascading style sheets**的首字母缩写，意思为层叠样式表。css文件中包含一系列的样式规则，来告诉浏览器，web页面中的不同元素需要如何排版和显示。例如我们可以通过`* { color: red; }`这样一条样式规则，来让web页面中的所有文字变成红色。因此我们可以把css理解为web页面的外表。

js为**javascript**的缩写，是一种运行在浏览器中的c-style的脚本语言。通过编写js程序，我们可以动态的修改web页面的内容，实现web页面中不同的功能。因此我们也可以把js理解为web页面的大脑。

### 一个简单的web页面

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>一个简单的web页面</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <p>你好</p>
    <p>我是你编写的第一个web页面</p>
    <script src="./index.js"></script>
  </body>
<html>
```

虽然我们还没有正式学习html的知识，但从这段html代码中，我们大致可以猜测到一下内容

* 该web页面包含中文
* 该web页面采用了utf-8编码
* 该web页面有一段话，其内容为“你好，我是你编写的第一个web页面”
* 该web页面引用了一个名字叫style.css的css文件
* 该web页面引用了一个名字叫index.js的js文件