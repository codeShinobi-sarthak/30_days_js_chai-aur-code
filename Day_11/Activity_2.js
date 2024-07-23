// task-3
const promise_1 = new Promise((resolve) => {
  resolve("first promise");
});

promise_1
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      resolve("second promise");
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      resolve("third promise");
    });
  })
  .then((result) => {
    console.log(result);
  });
