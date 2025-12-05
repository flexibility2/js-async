function miniPromise(fn) {
  this["[[PromiseState]]"] = "pending";
  this["[[PromiseResult]]"] = undefined;

  this.onFullfilledCallBack = [];
  this.onRejectedCallBack = [];

  const resolutionProcedure = (promise, res) => {
    if (promise === res) {
      return reject(new TypeError("Chaining cycle detected for promise"));
    }

    if (res instanceof miniPromise) {
      res.then(resolve, reject);
      return;
    }

    if (this["[[PromiseState]]"] !== "pending") return;
    this["[[PromiseResult]]"] = "fulfilled";
    this["[[PromiseResult]]"] = res;
    console.log("in resolve, data: ", res);

    // pub
    this.onFullfilledCallBack.forEach((fn) => {
      fn(res);
    });
  };

  const resolve = (res) => {
    resolutionProcedure(this, res);
  };

  const reject = (err) => {
    if (this["[[PromiseState]]"] !== "pending") return;
    this["[[PromiseState]]"] = "rejected";
    this["[[PromiseResult]]"] = err;
    console.log("in reject");
    this.onRejectedCallBack.forEach((fn) => {
      fn(err);
    });
  };
  fn(resolve, reject);
}

miniPromise.prototype.then = function (onFullfilled, onRejected) {
  // sub v1
  // onFullfilled && this.onFullfilledCallBack.push(onFullfilled);
  // onRejected && this.onRejectedCallBack.push(onRejected);
  // return this;
  return new miniPromise((resolve, reject) => {
    this.onFullfilledCallBack.push((value) => {
      try {
        const result = onFullfilled ? onFullfilled(value) : value;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  });
};

miniPromise.prototype.catch = function (onRejected) {
  onRejected && this.onRejectedCallBack.push(onRejected);
  return this;
};

module.exports = miniPromise;

// const mini = new miniPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolve");
//   }, 1000);
// });

// mini.then(
//   (data) => {
//     console.log("fullfilled in then");
//   },
//   (error) => {
//     console.log("rejected in then");
//   }
// );
