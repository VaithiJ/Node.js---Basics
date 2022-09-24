const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("request", (name, id) => {
  console.log(`the name is ${name} and id is ${id}`);
});

customEmitter.emit("request", "yt", "32");
