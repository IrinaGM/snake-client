let connection;

const movement = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  l: "Say: lol",
  o: "Say: oh no!",
  h: "Say: hi!",
};

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // event listener on input from user keyboard
  stdin.on("data", (key) => handleUserInput(key));

  return stdin;
};

// function that runs when input recieved from the user keyboard
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  connection.write(movement[key]);
};

module.exports = { setupInput };
