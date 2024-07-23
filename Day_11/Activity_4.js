// task-6
const fetchPromise = new Promise((resolve, reject) => {
  const json = fetch("https://openlibrary.org/works/OL45804W/editions.json");
  resolve(json);
});

// task-7
fetchPromise.then((result) => {
  console.log("result for fetch promise : ");
  console.log(result);
});

const asyncFetch = async () => {
  const json = await fetch(
    "https://openlibrary.org/works/OL45804W/editions.json"
  );
  console.log("result for async fetch : ");
  console.log(json);
};

asyncFetch();
