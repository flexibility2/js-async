const double = (x) => x * 2;
const square = (x) => x * x;

const compose = (...fns) => {
  return function (input) {
    return fns.reduceRight((acc, fn) => fn(acc), input);
  };
};

const composeFn = compose(double, square);
const res = composeFn(3);
console.log(res);
