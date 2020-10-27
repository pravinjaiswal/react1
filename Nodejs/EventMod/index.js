const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("Your name is Pravin");
});

event.on("sayMyName", () => {
  console.log("Your father name is Pravin");
});

event.on("sayMyName", () => {
  console.log("Your surname is Jaiswal");
});

event.emit("sayMyName");
