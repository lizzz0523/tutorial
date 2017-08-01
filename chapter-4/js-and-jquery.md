## js，web页面的大脑
有了html，有了css，一个web页面就大致完成了。然而这样的"静态"web页面，算不上一个完整的web应用，因为它并不“智能”，我们还不能根据不同的场景，通过编程的手段控制页面的内容。为了实现“智能”的目的，我们需要另一个web开发利器——javascript。

javascript是一门c-style的脚本语言，可以说没有javascript，就没有现在功能强大的web应用。

### js基础语法

#### console对象
console对象是js中的控制台对象，通过调用console对象上的方法，我们可以向浏览器控制输出信息。

```javascript
console.log("hello %s", "world");
console.error("error: %s", err.message);
```

#### 变量声明，赋值
在js中，可以声明变量，并对变量进行赋值，而且js是一门动态类型的语言，因此你在声明一个变量时，不需要指出变量的数据类型，而是由js引擎在实际执行js代码时，动态获取变量的数据类型。在js中使用`var`关键字声明变量：

```javascript
var name = "liz"; // 同时声明和赋值

var age; // 先声明变量
age = 29; // 然后再赋值
```

#### 数据类型
在js中有5种基础数据类型：

* number，数字
* string，字符串
* boolean，布尔值
* null，空值
* undefined，未定义

除此以外，js中的数据均为对象，而其中常用的对象类型有：

* Object，字典
* Array，数组
* RegExp，正则表达式
* Date，日期

```javascript
// 基础数据类型
var number = 12;
var string = "it is a string"; // 'it is a string too'
var boolean = true; // false
var name = null;
var age; // undefined

// 对象类型
var object = { key: "value" };
console.log(objest.key); // "value"

var array = [ 1, 2, 3 ];
console.log(array.length); // 3
console.log(array[0]); // 1

var regexp = /^\d{8}$/;
regexp.test("12345678"); // true;

var date = new Date();
console.log(date.getTime()); // 1501405896357
```

#### 数学运算
js支持常见的数学运算，但记住，js中的number类型是64位浮点，因此所有的数学运算均为浮点数运算

* 加法，`a + b`，`a += b`
* 减肥，`a - b`，`a -= b`
* 乘法，`a * b`，`a *= b`
* 除法，`a / b`，`a /= b`
* 取余，`a % b`，`a %= b`
* 递加，`a++`，`++a`
* 递减，`a--`，`--a`

同时，js也支持使用括号来修改运算的优先级：

```javascript
var a = 2;
var b = 4;
var c = 10;

console.log((a + b) / c); // 0.6
```

#### 逻辑比较
js支持常见的逻辑比较，比较的结果为布尔值

* 大于，`a > b`
* 大于等于，`a >= b`
* 小于，`a < b`
* 小于等于，`a <= b`
* 等于，`a == b`
* 不等于，`a != b`
* 严格等于，`a === b`
* 严格不等于，`a !== b`

其中，等于和严格等于的区别是，严格等于不会进行隐式类型转换

```javascript
var a = 1;
var b = "1";

a == b; // true
a === b; // false
```

#### 分支
js支持分支语法，通过`if`，`else`，`elseif`或`switch`，`case`语句，能根据不同情况执行不同的代码块：

```javascript
var a = 2;

if (a % 2 === 0) {
  console.log("%s是偶数", a);
} else {
  console.log("%s不是偶数", a);
}
```

#### 循环
js支持循环语句，通过`for`，`while`或者`do...while`语句，能重复执行某个代码块：

```javascript
for (var i = 0; i < 10; i++) {
  console.log("第%s次循环", i);
}

var i = 10;
while (--i) {
  console.log("剩余%s次", i);
}
```

#### 函数
js中，可以通过声明函数，来达到代码复用的目的。在js中使用`function`关键字声明函数，后跟着函数名、参数列表和函数体，参数列表使用括号包围，函数体使用大括号包围。通过`return`语句，函数可以返回不同的结果：

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(1, 2)); // 3
```

在js中，函数是一等公民，亦即函数可以赋值给变量，作为参数传递给另一个函数或者作为返回值从另一个函数中返回：

```javascript
function add(a, b) {
  return a + b;
}
// 函数赋值给变量
var add2 = add;
// 函数直接作为变量的值
var add3 = function (a, b) {
  return a + b;
};

// 函数作为参数传递给另一个函数
function call(fn) {
  return fn(1, 2);
}
call(add);

// 函数作为返回值返回
function make() {
  return function (a, b) {
    return a + b;
  }
}
var add4 = make();
```

### 基本dom操作
现在我们已经可以在浏览器里执行一些自定义的逻辑了。然而我们要如何去动态修改html文件的内容呢？这时候我们就需要使用dom了。dom是**document object model**的首字母缩写，亦即文档对象模型，是浏览器提供给js的，用于操作html内容的接口。

但是原生的dom接口，是十分基础的接口，使用起来比较晦涩。为了方便，我们这里使用一个著名的js第三方库——jquery，来帮助我们快速的操作dom。

#### 获取dom节点
在jquery中，提供了全局的`$`函数，来帮助我们快速获取dom节点，`$`函数接受一个css选择器字符串作为参数，并把选中的dom节点包装在jquery对象中返回：

```javascript
var $list = $("#list");
var $btn = $("#btn");
```

#### 插入dom节点
在获取到dom节点后，我们就可以向该节点插入新的内容。jquery提供了多个不同功能的实例方法，来插入dom节点，其中最简单的为`html`方法：

```javascript
var html = "";

for (var i = 0; i < 10; i++) {
  html += "<li>" + i + "</li>";
}

$list.html(html);
```

#### 修改样式
我们也可以通过js，动态的修改dom节点样式。同样jquery提供了`css`方法来帮忙我们快速完成任务：

```javascript
$list.css("background-color", "black");
// 或者传入一个object，同时设置多个样式
$list.css({
  "font-size": "12px",
  "line-height": "1.5em"
});
```

#### 实现动画
通过修改样式，我们可以改变dom节点的尺寸和位置等属性。如果我们定时的修改这些属性，就形成了动画。当然我们不需要手动的设置定时器，jquery内置了`animate`实例方法，来帮助我们快速完成动画。除此以外，jquery还提供了多个实用的预设动画，我们可以直接使用：

```javascript
$list.animate({
    "font-size": "30px"
});
// jquery的预设动画slide-up
$list.slideUp();
```

#### 事件监听
除了修改dom节点的状态，为了和用户进行交互，我们还需要监听用户在某个dom节点上的操作。例如，当用户点击按钮时，我们需要把列表的背景颜色设置为红色，通过jquery的`on`实例方法，我们可以很方便的完成该功能：

```javascript
$btn.on("click", function () {
  $list.css("background-color", "red");
});
```

### 发送ajax请求
现在我们已经可以通过js来修改html的内容了，然而离真正的“动态”还差一步。这是由于我们还不能“动态”的区分不同用户，根据用户的不同来显示不同的内容。这时候可能有些同学就会疑惑了，我们的html，css，js都是预先编写好再下发给用户的，如何才能根据不同的用户显示不同的内容呢？这应该做不到才对啊。

的确单靠现在这些，我们并不能区分不同的用户，因此我们需要借助后台接口的能力。要从后台获取数据，我们需要能让js具有发送http请求的能力，而ajax就是我们所需要的能力。ajax是**asynchronous javascript and xml**的首字母缩写，亦即异步javascript和xml，是js能发起http请求，并解析响应内容的一系列接口的统称。虽然名称里带有xml，然而实际上我们使用得更多的是json。

如果要我们直接编写ajax相关的原生js代码，虽然不难，但要处理的细节还是比较繁琐的。不过幸运的是，jquery提供给我们一个名叫`ajax`的方法来帮助我们屏蔽这些细节。例如我们需要向后台的某个cgi发起请求，我们只需编写如下代码：

```javascript
var res = $.ajax({
  type: "GET",
  url: "cgi.php",
  data: {
    action: "get_list",
    params: {
      page: 0,
      size: 1
    }
  },
  dataType: "json"
});

res.done(function () {
  // 处理返回数据
})

res.fail(function () {
  // 处理请求错误
});
```

### 使用jquery插件
最后，很多我们想要完成的功能，其实已经有很多工程师通过jquery插件的形式实现并开源给其他开发者使用，在这里我介绍几个常用的jquery插件：

* [swiper](http://idangero.us/swiper/)
* [transit](http://ricostacruz.com/jquery.transit/)
* [uploadify](http://www.uploadify.com/)
