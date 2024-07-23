// task-1
const logPromise = new Promise((resolve) => {
  setTimeout(() => {
    console.log("promise resolved");
  }, 2000);
});

logPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// task-2
const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rejected = true;
    if (rejected) {
      reject(" promise rejected");
    } else resolve("error promise resolve");
  }, 2000);
});

errorPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
