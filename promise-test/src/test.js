const Promis = require("./mini-promise");

Promis.deferred = function () {
  var result = {};
  result.promise = new Promis(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });
  return result;
};
module.exports = Promis;
