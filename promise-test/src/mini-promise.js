function miniPromise(fn) {
  this["[[PromiseState]]"] = "pending";
  this["[[PromiseResult]]"] = undefined;

  this.onFullfilledCallBack = [];
  this.onRejectedCallBack = [];

  const resolve = (res) => {
    this["[[PromiseResult]]"] = res;
    console.log("in resolve, data: ", res);

    // pub
    this.onFullfilledCallBack.forEach((fn) => {
      fn(res);
    });
  };

  const reject = (err) => {
    console.log("in reject");
    this.onRejectedCallBack.forEach((fn) => {
      fn(err);
    });
  };
  fn(resolve, reject);
}

miniPromise.prototype.then = function (onFullfilled, onRejected) {
  // sub
  onFullfilled && this.onFullfilledCallBack.push(onFullfilled);
  onRejected && this.onRejectedCallBack.push(onRejected);
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
