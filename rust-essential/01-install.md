# 安装Rust

官方推荐采用`rustup`来安装Rust。`rustup`是用于安装和管理Rust工具链的命令行工具，类似于Nodejs的`nvm`。

通过`rustup`安装Rust只需在终端运行以下命令即可：

```shell
$ curl https://sh.rustup.rs -sSf | sh
```

安装完成后，我们就可以在终端上执行以下命令，查看是否安装成功：

```shell
$ rustc --version
rustc 1.22.1 (05e2e1c41 2017-11-22)
```

一旦安装成功，我们就可以使用以下命令，来对Rust代码进行编译：

```shell
$ rustc <file>
```