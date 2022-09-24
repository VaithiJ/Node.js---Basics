const fs = require("fs");

fs.readFile("./texts/newOne.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

fs.appendFile("./texts/vaithi.txt", "Vaithi", (err, result) => {
  if (err) {
    return err;
  }
  console.log(result);
});
