const fs = require("fs");

console.log(fs.readFileSync("./texts/ooo.txt", "utf-8"));

console.log(
  fs.writeFileSync("./texts/newOne.txt", "HEy thereekadlh kjafjj ljhfaljj")
);

fs.appendFileSync("./texts/newOne.txt", "HEllo There", "utf-8");
