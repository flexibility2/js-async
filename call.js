Function.prototype.call2 = function (context, ...args) {
  if (typeof context === undefined || context === null) {
    context = window;
  }
  let fnSymbol = Symbol();
  context[fnSymbol] = this;
  let fn = context[fnSymbol](...args);
  delete context[fnSymbol];
  return fn;
};

function test(a) {
  console.log(this.name, a);
}

test.call2({ name: "test" }, 1);
