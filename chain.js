function Person(name, age) {
  this.name = name;
  this.age = age;
}

const sleep = function () {
  console.log("sleep");
  return this;
};

const eat = function () {
  console.log("eat");
  return this; // 调用的时候，所以指向的Person
};

Person.prototype = {
  sleep,
  eat,
};

const person = new Person("WW", 23);
person.sleep().eat();

// this 指向
// new, 调用的时候，显示生命（call, apply）
