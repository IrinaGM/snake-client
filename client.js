const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for established connection to server
  conn.on("connect", (connection) => {
    console.log("Successfully connected...");
    conn.write("Name: IG");
  });

  // event handler for data recieved from the server
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");

module.exports = { connect };
