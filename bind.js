Function.prototype.bind2 = function (context, ...args) {
  const fn = this;
  return function (...rest) {
    fn.apply(context, [...args, ...rest]);
  };
};
function test(a, b) {
  console.log(this.name, a, b);
}

const bound = test.bind2({ name: "bound" }, 1);
bound(2);
