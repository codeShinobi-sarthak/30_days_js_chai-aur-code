// task-8

fetch("http://invalid-url.com")
  .then((response) => {
    if (!response.ok) {
      throw new Error("response not ok");
    }
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// task-9

async function fetchData() {
  try {
    const response = await fetch("http://invalid-url.com");
    console.log(response);
  } catch (error) {
    console.log("Error occured : " + error);
  }
}

fetchData();
