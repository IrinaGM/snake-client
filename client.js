const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for established connection to server
  conn.on("connect", (connection) => {
    console.log("Successfully connected to game server");
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
