try {
  throw new Error("Unable to decrypt accounts");
} catch (e) {
  console.log(e.message);
}

console.log('try catch ended');
