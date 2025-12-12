function myNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype);
  const reslut = Constructor.apply(obj, args);
  return typeof reslut === "object" && reslut !== null ? reslut : obj;
}
function Person(name) {
  this.name = name;
}
const p = myNew(Person, "Top");
console.log(p.name);
