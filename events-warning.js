// LICENSE : MIT
"use strict";
const events = require("events");
const event = new events.EventEmitter();
event.setMaxListeners(1);
process.on('warning', (warning) => {
    console.warn(warning.message);
    // Warning: Possible EventEmitter memory leak detected. 2 test listeners added. Use emitter.setMaxListeners() to increase limit
});

event.on("test", () => {});
event.on("test", () => {});