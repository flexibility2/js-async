const [a, b, c] = [1, 2, 3];
console.log(a);

const { firstName, lastName } = { firstName: "John", lastName: "Doe" };
console.log(lastName);

function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
