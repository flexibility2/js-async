const memoize = (fn) => {
  const cache = new Map();
  return function (...input) {
    const key = JSON.stringify(input);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const res = fn(...input);
    cache.set(key, res);
    return res;
  };
};

const showSquare = (x) => {
  console.log("first");
  return x * x;
};

const fn = memoize(showSquare);
console.log(fn(2));
console.log(fn(2));
