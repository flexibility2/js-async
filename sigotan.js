function getFactory() {
  let ins = null;
  return {
    getFunction: function () {
      if (!ins) {
        ins = new Date();
      }
      return ins;
    },
  };
}

let ins = getFactory();
let a = ins.getFunction();
let b = ins.getFunction();
console.log("a: ", a);
console.log("b: ", b);
console.log("is same: ", a === b);
