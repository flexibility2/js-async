Function.prototype.apply2 = function (context, args) {
  if (context === undefined || context === null) {
    context = globalThis;
  }
  let fnSymbol = Symbol();
  context[fnSymbol] = this;
  let fn = args ? context[fnSymbol](...args) : context[fnSymbol]();
  delete context[fnSymbol];
  return fn;
};
function test(a) {
  console.log(this.name, a);
}
test.apply2({ name: "apply" }, [1]);
