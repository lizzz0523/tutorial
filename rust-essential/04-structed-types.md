# 结构化数据类型

Rust中并不存在`class`这样的面向对象机制来定义复杂的数据结构，从这个层面来讲Rust并不是一门面向对象的语言。但Rust提供了强大的`struct`和`trait`来处理复杂的结构化数据，使得我们能方便的处理那些“面向对象”的问题。接下来，我会给大家介绍如何在Rust中定义`struct`，以及另外一种常用的结构化数据类型`enum`。并且我会给大家介绍几种Rust标准库中预定义的常用的`struct`和`enum`。

## 结构体

有C/C++经验的同学们，对`struct`应该不陌生，`struct`是一种可以把多个不同类型的数据以key-value的方式组合在一起的结构化数据类型，以下代码用于定义一个名为`Point`的`struct`数据类型，以及使用这个自定义的数据类型来初始化一个`point`变量：

```rust
struct Point {
    x: i32,
    y: i32,
}

let point = Point { x: 10, y: 10 };
```

在对初始化后，我们就可以通过`.`操作符来获取变量`point`中的不同字段：

```rust
println!("x: {}, y: {}", point.x, point.y);
// >> x: 10, y: 10
```

到现在为止，Rust中的`struct`和C/C++中的并无二致，而真正使得Rust中的`struct`比C/C++更强大的，是在Rust中，我们可以给`struct`定义方法：

```rust
struct Point {
    x: i32,
    y: i32,
}

// 通过impl关键字定义方法
impl Point {
    // 定义静态方法
    fn new(x: i32, y: i32) -> Point {
        Point{ x, y }
    }

    // 定义实例方法，通过self引用实例数据
    fn add(&mut self, other: &Point) {
        self.x += other.x;
        self.y += other.y;
    }
}

let mut p1 = Point::new(10, 10);
let p2 = Point::new(20, 20);

p1.add(&p2);

println!("x: {}, y: {}", p1.x, p1.y);
// >> x: 30, y: 30
```

通过给`struct`定义方法，我们就可以完成`class`中的大部分面向对象的功能了。但Rust中`struct`并不具备继承的其他`struct`的能力，相反Rust采用了`trait`这样的机制，类似C++中的`interface`，来完成继承的功能，这个我们暂时不细讲。

## String

我们在基础数据类型一章中提及过，可以通过字面量的方式来定义字符串：

```rust
let x = "abc";
```

而当时我们也说过，Rust中的字符串字面量，实际是保存在程序的二进制文件中，并随着程序的启动加载到内存，而变量中实际保存的是一个指向字符串起始地址的指针，以及字符串的长度。换句话说Rust中的字符串字面量实际上是“静态”的，无法按需的追加新的内容。如果需要实现动态可变的字符串，我们需要在程序运行时从堆中申请内存。其实Rust的标准库中，早已经定义好一个`struct`，帮助我们完成与字符串相关的内存管理，这个`struct`就是`String`：

```rust
// 声明了一个String
let mut x = String::new();
```

此外我们可以直接通过`&str`来声明`String`：

```rust
let mut x = String::from("bbc");
// 或者
let mut y = "bbc".to_string();
// 或者
let mut z = format!("{} world", "hello");
```

然后我们就可以在需要的时候，向`String`中追加其他内容：

```rust
// 追加字符
x.push('c');
// 追加字符串
x.push_str("abc");
// 或者直接通过加号运算符追加字符串
x += "abc";
```

需要注意的是，`String`和`&str`一样，内部采用utf-8编码，而Rust作为一门系统级的编程语言，很多时候都需要和系统打交道。而有些系统的字符串编码并不是utf-8，因此Rust另外给我们提供了一些处理“特殊”字符串的`struct`。

* 处理文件路径时使用`std::path::PathBuf`和`&Path`
* 处理命令行参数时使用`OsString`和`&OsStr`
* 与C语言编写的库交互时使用`std::ffi::CString`和`&CStr`
* 处理二进制流时使用`Vec<u8>`和`&[u8]`

## Vec

除了字符串字面量，我们在基础数据类型一章中，还提及过另一种“静态”数据类型：数组字面量。

```rust
let x = [1, 2, 3];
```

Rust中数组字面量是直接写入到栈中，并且和字符串字面量一样，数组字面量长度是固定的。也就是说我们并不能动态的向数组追加新的内容。如果我们需要实现一个长度动态可变的数组，我们需要在程序运行时从堆中申请内存。而Rust的标准库中，同样已经定义好一个`struct`，帮助我们完成与数组相关的内存管理，这个`struct`就是`Vec<T>`：

```rust
let mut x = Vec::new();
x.push(1);
x.push(2);
x.push(3);
```

由于`Vec<T>`中的内存是在堆上动态分配的，因此在栈上实际只保留了三个值，一个是指向堆中内存起始地址的指针，一个是堆中已分配内存的容量`capacity`，最后一个是`Vec<T>`中已存在的项的个数，也就是它的长度`length`。每当`length`等于`capacity`时，如果我们继续向`Vec<T>`中追加新的项时，就会触发Rust中重新分配内存，`Vec<T>`会把旧内存上的项复制到新的内存上，并且释放旧的内存，同时把指针重新指向新的内存地址。（注意，在上一节中说到的`String`，也有类似的机制）

而内存的分配实际是比较费时的，因此在初始化`Vec<T>`时，如果我们已知`Vec<T>`所需要的容量，我们可以使用`with_capacity`方法代替`new`方法来提高性能：

```rust
let mut x = Vec::with_capacity(3);
x.push(1);
x.push(2);
x.push(3);
```

同时为了保持与数组字面量相似的编程体验，Rust为我们预定义了宏`vec!`，方便我们直接定义`Vec<T>`：

```rust
let mut x = vec![1, 2, 3];
// 如果每一项都相同
let mut y = vec![0; 10];
```

在初始化后，我们就通过`Vec<T>`提供的方法来操作它：

```rust
x.insert(2, 10);
// >> [1, 2, 10, 3]

x.remove(0);
// >> [2, 10, 3]

x.pop();
// >> [2, 10]
```

## Box

## 枚举

## Option

## Result