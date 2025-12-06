console.log([].__proto__ === Array.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Array.prototype.constructor === Array);

// 什么是构造函数，new的时候会执行构造函数，一般首字母大写
function A() {
  this.name = "1";
  this.hobby = ["reading", "swimming"];
}

A.prototype.say = function () {
  console.log("My name is " + this.name);
};

console.log("A prototype:", A.prototype);

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

// 无法继承原型上的方法，虽然解决了引用类型共享的问题，因此还需要手动继承原型上的方法
function C() {
  // 执行了A的构造函数，继承了构造函数里面定义的属性
  A.call(this, arguments);
}

const c1 = new C();
const c2 = new C();

c1.name = "3";
c1.hobby.push("running");

console.log(c2.name);
console.log(c2.hobby);

console.log("============");

// 组合继承
function D() {
  A.call(this);
}

D.prototype = Object.create(A.prototype); // 继承A的原型方法
D.prototype.constructor = D; // 维护构造函数的指向

const d1 = new D();
const d2 = new D();

d1.name = "4";
d1.hobby.push("running");

console.log(d2.name);
console.log(d2.hobby);
console.log("D.prototype:", D.prototype);
console.log("d1.__proto__:", d1.__proto__);
console.log("d1.say:", d1.say());
