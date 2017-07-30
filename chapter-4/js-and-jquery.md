## js，web页面的大脑
有了html，有了css，一个web页面就大致完成了。然而这样的"静态"web页面，算不上一个完整的web应用，因为它并不“智能”，我们还不能根据不同的场景，通过编程的手段控制页面的内容。为了实现“智能”的目的，我们需要另一个web开发利器---javascript。

javascript是一门c-style的脚步语言，可以说没有javascript，就没有现在功能强大的web应用。

### js基础语法

#### console
console是js中的控制台对象，通过调用console对象上的方法，我们可以像浏览器控制输出信息。

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
* Array，数字
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

### 循环
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

### 函数
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
