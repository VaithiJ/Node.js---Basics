const os = require("os");

// const user = os.userInfo();
// console.log(user);

// const path = os.homedir();
// console.log(path);

// const architecture = os.arch();
// console.log(architecture);

// const win = os.platform();
// console.log(win);

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentUser = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentUser);
