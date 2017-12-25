# Hello Rust

为了演示最基本的Rust程序，这里就不免俗套的写一个Rust版本的Hello World程序。

首先，创建一个项目文件夹`hello_world`：

```shell
$ mkdir hello_world && cd hello_world
```

然后创建一个名叫`hello_world.rs`的文件：

```
$ vi hello_world.rs
```

Rust代码以`.rs`作为文件后缀。接下来，我们在`hello_world.rs`文件中输入：

```rust
fn main() {
    println!("hello rust");
}
```

Rust和C语言一样，是以main函数作为程序的入口。这里，我们通过关键字`fn`来定义函数，`fn`后跟一个空格，然后是函数名称`main`，紧接着是放置在`()`中的参数列表，这里我们的`main`函数没有接收任何参数。在main函数中，我们调用了Rust内置的宏`println!`（注意最后面的感叹号`!`）在屏幕上打印出`hello rust`。

接下来，我们就使用`rustc`命令对Rust代码进行编译：

```shell
$ rustc hello_world.rs
```

一旦成功编译，Rust编译器就会在项目文件夹下创建一个名叫`hello_world`的可执行文件，这时我们就可以直接执行这个文件：

```shell
$ ./hello_world
hello rust
```