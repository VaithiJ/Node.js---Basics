// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const start = async () => {
//   try {
//     const first = await readFilePromise("./texts/vaithi.txt", "utf-8");
//     const second = await readFilePromise("./texts/ooo.txt", "utf-8");
//     await writeFilePromise(
//       "./texts/marvel.txt",
//       `The new text is ${first} and ${second}`
//     );
//     console.log(`The new text is ${first} and ${second}`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

//------------------------Another method-----------------------------------------------------------------------------------------------

const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
const start = async () => {
  try {
    const first = await readFile("./texts/vaithi.txt", "utf-8");
    const second = await readFile("./texts/ooo.txt", "utf-8");
    await writeFile(
      "./texts/marvel.txt",
      `The new text issssssss ${first} and ${second}`
    );
    console.log(`The new text is ${first} and ${second}`);
  } catch (error) {
    console.log(error);
  }
};

start();
