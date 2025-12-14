const double = (x) => x * 2;
const square = (x) => x * x;

const pipe = (...fns) => {
  return function (input) {
    return fns.reduce((acc, fn) => fn(acc), input);
  };
};

const pipeFn = pipe(double, square);
const res = pipeFn(3);
console.log(res);
