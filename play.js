const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting to server...");
connect();

setupInput();
