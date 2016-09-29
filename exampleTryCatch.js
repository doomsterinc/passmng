// try {
//   throw new Error("Unable to decrypt accounts.");
// } catch (e) {
//   console.log(e.message);
// } finally {
//   console.log("Finally block executed!");
// }

// console.log('try catch ended');

function doWork(){
  throw new Error("Unable to do work");
}

try {
  doWork();
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Finally block executed!");
}
