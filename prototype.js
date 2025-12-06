console.log([].__proto__ === Array.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Array.prototype.constructor === Array);

function A() {
  this.name = "1";
  this.hobby = ["reading", "swimming"];
}

function B() {}
B.prototype = new A();

const b1 = new B();
const b2 = new B();

b1.name = "2";
b1.hobby.push("running");

console.log(b2.name);
// 原型中的引用对象会被共享
console.log(b2.hobby);

console.log("--------");

// 无法继承原型上的方法
function C() {
  A.call(this, arguments);
}

const c1 = new C();
const c2 = new C();

c1.name = "3";
c1.hobby.push("running");

console.log(c2.name);
console.log(c2.hobby);
