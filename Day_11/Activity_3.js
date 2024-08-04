// task-4

const waitPromise = new Promise((resolve, reject) => {
   const bool = true;
   if (bool) {
      setTimeout(() => {
         resolve("promise resolved for wait promise");
      }, 4000);
   } else reject("promise rejected for wait promise");
});

async function task_4() {
   await waitPromise.then((result) => console.log(result));
   console.log("task_4 await finished");
}
task_4();

// task-5
const waitPromise2 = new Promise((resolve, reject) => {
   const bool = false;
   if (bool) {
      setTimeout(() => {
         resolve("promise resolved for task 4 promise");
      }, 4000);
   } else reject("promise rejected for task 4 promise");
});

async function task_5() {
   try {
      await waitPromise2;
      console.log("task_5 await finished");
   } catch (error) {
      console.log("promise resolved for task 5 with rejection : " + error);
   }
}
task_5();
