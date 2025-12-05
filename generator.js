// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = generator();
// while (true) {
//   const { value, done } = gen.next();
//   if (done) break;
//   console.log(value);

// }

// auto run

function* generator() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}

const miniAwait = (gen) => {
  const { value, done } = gen.next();
  console.log("value: ", value);
  if (done) {
    return;
  }
  value.then(() => {
    miniAwait(gen);
  });
};

const gen = generator();
miniAwait(gen);
