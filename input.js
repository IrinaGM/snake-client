// setup interface to handle user input from stdin
const setupInput = () => {
  const stdin = process.stdin;
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
  console.log(key);
};

module.exports = { setupInput };
