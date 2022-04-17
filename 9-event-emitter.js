const EventEmitter = require("events");

const CustomEmitter = new EventEmitter();

CustomEmitter.on("response", (name, rollon) => {
  console.log(`${name}: ${rollon}`);
});

CustomEmitter.emit("response", "Siddhartha", 200013139112);
