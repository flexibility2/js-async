const fetchData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve");
    }, 1000);
  });
};

const onFullfilled = (data) => {
  console.log(data);
};

const onRejected = (data) => {
  console.log(data);
};

fetchData().then(onFullfilled, onRejected);
