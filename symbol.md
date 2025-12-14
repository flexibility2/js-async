## 基础使用

- 创建 Symbol
  ```js
  const sym1 = Symbol();
  const sym2 = Symbol("description");
  console.log(sym1 === sym2); // 输出: false
  ```
- 使用 Symbol 作为对象的属性键
  ```js
  const mySymbol = Symbol("mySymbol");
  const obj = {
    [mySymbol]: "value",
  };
  console.log(obj[mySymbol]); // 输出: "value"
  ```
- 全局 Symbol 注册表
  ```js
  const globalSym = Symbol.for("globalSymbol");
  const anotherGlobalSym = Symbol.for("globalSymbol");
  console.log(globalSym === anotherGlobalSym); // 输出: true
  ```

## 高级用法

- 使用 Symbol 作为常量

  ```js
  const STATUS = {
    PENDING: Symbol("PENDING"),
    COMPLETED: Symbol("COMPLETED"),
    FAILED: Symbol("FAILED"),
  };
  function checkStatus(status) {
    switch (status) {
      case STATUS.PENDING:
        console.log("Pending...");
        break;
      case STATUS.COMPLETED:
        console.log("Completed!");
        break;
      case STATUS.FAILED:
        console.log("Failed.");
        break;
      default:
        console.log("Unknown status.");
    }
  }
  checkStatus(STATUS.COMPLETED); // 输出: "Completed!"
  ```

- 使用 Symbol 隐藏对象属性
  ```js
  const secretKey = Symbol("secret");
  const user = {
    name: "Alice",
    [secretKey]: "mySecretValue",
  };
  console.log(user.name); // 输出: "Alice"
  console.log(user[secretKey]); // 输出: "mySecretValue"
  console.log(Object.keys(user)); // 输出: ["name"]
  console.log(Object.getOwnPropertySymbols(user)); // 输出: [Symbol(secret)]
  ```
- 自定义迭代器
  ```js
  const myIterable = {
    [Symbol.iterator]() {
      let step = 0;
      const iterator = {
        next() {
          step++;
          if (step <= 3) {
            return { value: step, done: false };
          } else {
            return { value: undefined, done: true };
          }
        },
      };
      return iterator;
    },
  };
  for (const value of myIterable) {
    console.log(value); // 输出: 1, 2, 3
  }
  ```
