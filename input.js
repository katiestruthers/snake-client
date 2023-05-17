const { ENCODING, MOVEMENTS, MESSAGES } = require("./constants");
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key in MOVEMENTS) {
    connection.write(`Move: ${MOVEMENTS[key]}`);
  } else if (key in MESSAGES) {
    connection.write(`Say: ${MESSAGES[key]}`);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;