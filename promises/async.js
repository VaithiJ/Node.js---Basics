const { readFile, writeFile } = require("fs");
const { resolve } = require("path");

const read = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (error, data) => {
      //error, data can be any variable name like (nivi, vaithi)...something like that
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const write = (path) => {
  return new Promise((resolve, reject) => {
    writeFile(path, "Marvel and Vaithi", "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await read("./texts/ooo.txt");
    const second = await read("./texts/vaithi.txt");
    console.log(`${first} and ${second}`);
  } catch (error) {
    console.log(error);
  }
};

write("./texts/marvel.txt")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

start();

// text("./texts/ooo.txt")
//   .then((result) => console.log(result)) //result is not a global variable...it can be any word!
//   .catch((err) => console.log(err)); //err can be any word
