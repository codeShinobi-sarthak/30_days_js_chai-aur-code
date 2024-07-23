const promise_1all = new Promise((resolve) => {
  setTimeout(() => {
    resolve("first promise");
  }, 6000);
});
const promise_2all = new Promise((resolve) => {
  setTimeout(() => {
    resolve("second promise");
  }, 5000);
});
const promise_3all = new Promise((resolve) => {
  setTimeout(() => {
    resolve("third promise");
  }, 7000);
});

// task-8
Promise.all([promise_1all, promise_2all, promise_3all]).then((result) => {
  console.log(result);
});

// task-9
Promise.race([promise_1all, promise_2all, promise_3all]).then((result) => {
  console.log("promise wins is : " + result);
});
