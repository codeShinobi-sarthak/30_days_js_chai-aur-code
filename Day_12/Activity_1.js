// task-1

function throwError() {
  try {
    const num = 3;
    num = 4;
  } catch (error) {
    console.log("intentionally thows error : " + error);
  }
}

throwError();

// task-2
function divide(a, b) {
  try {
    if (b == 0) {
      //   throw new Error("denominator is zero");
      throw "dnominator is 0";
    }
    const ans = a / b;
    console.log(ans);
  } catch (error) {
    console.log(error);
  }
}

divide(4, 0);
