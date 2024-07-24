try {
  console.log("this is try block");
} catch (error) {
  console.log("this is error block : " + error);
} finally {
  console.log(
    "this is finall block -> Block of code to be executed regardless of the try / catch result"
  );
}
