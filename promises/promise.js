const { readFile } = require("fs");
const { resolve } = require("path");

const text = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (error, data) => {
      //error, data can be any variable name like (marvel, vaithi)...something like that
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

text("./texts/ooo.txt")
  .then((result) => console.log(result)) //result is not a global variable...it can be any word!
  .catch((err) => console.log(err)); //err can be any word
