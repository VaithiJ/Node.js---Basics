console.log("first");

setTimeout(() => {
  console.log("second");
}, 200); //settimeot is asynchronous, so they get offloaded and number 3 will take place before. To avoid use async/await

console.log("third");
