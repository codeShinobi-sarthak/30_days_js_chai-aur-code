// task - 6
const randomNumber = Math.random() * 10;

const randomPromise = new Promise((resolve, reject) => {
  if (randomNumber > 5) {
    resolve("promise is resolved");
  } else {
    reject("promise is rejected");
  }
});

randomPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// task - 7

const task_7 = async () => {
  try {
    const value = await randomPromise;
    console.log(value);
  } catch (error) {
    console.log(error);
  }
};

task_7();
