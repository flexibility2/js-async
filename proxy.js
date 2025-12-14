const object = {};
Object.defineProperty(object, "name", {
  value: "John",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(object.name);

const person = {};
const handler = {
  get(target, key) {
    return target[key];
  },
  set(target, key, value) {
    console.log(`Setting ${key} to ${value}`);
    target[key] = value;
    return true;
  },
};
const proxyPerson = new Proxy(person, handler);
proxyPerson.name = "John Doe"; // 控制台输出: Setting name to John Doe
console.log(proxyPerson.name); // 输出: John Doe

// Proxy 的使用场景

// Reflect 通常和反射一起出现。反射的优势不需要传入变更对象的具体实现，只需要关注要更改的属性
// Reflect 常用于 元编程，可以与 Proxy 结合使用，以便在拦截对象操作时调用默认行为。例如：
const target = {
  name: "Alice",
};
const handlerReflect = {
  get(target, key, receiver) {
    console.log(`Getting ${key}`);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log(`Setting ${key} to ${value}`);
    return Reflect.set(target, key, value, receiver);
  },
};
const proxyReflect = new Proxy(target, handlerReflect);
proxyReflect.name = "Bob"; // 控制台输出: Setting name to Bob
console.log(proxyReflect.name); // 控制台输出: Getting name，输出: Bob

// Reflect 还可以用于简化对象操作，例如：
const obj = {
  x: 10,
  y: 20,
};
console.log(Reflect.get(obj, "x")); // 输出: 10
Reflect.set(obj, "y", 30);
console.log(obj.y); // 输出: 30

// Reflect有很多属性
