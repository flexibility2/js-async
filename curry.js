function add(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  const length = fn.length;

  return function _curry(...args) {
    if (args.length >= length) {
      console.log("参数收集结束", ...args);
      return fn(...args);
    } else {
      return function (...args2) {
        return _curry(...args, ...args2);
      };
    }
  };
}

const curryAdd = curry(add);

const res = curryAdd(1)(2, 3);

console.log(res);
