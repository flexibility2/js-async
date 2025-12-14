# js-async

## 简介

js-async 是一个用于学习和演示 JavaScript 异步编程（如 Promise、async/await、回调等）的项目。适合初学者和希望深入理解异步机制的开发者。

## 特性

- Promise 基础与进阶用法
- async/await 示例
- 回调函数与回调地狱
- 常见异步场景实战

## 安装

克隆本仓库：

```bash
git clone https://github.com/你的用户名/js-async.git
cd js-async
```

## 用法示例

请参考 `src/` 目录下的示例代码：

```js
// 示例：使用 Promise
function asyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("done"), 1000);
  });
}
asyncTask().then(console.log); // 输出 'done'
```

## 贡献

欢迎提交 issue 或 pull request 改进本项目。

## 许可证

MIT License
