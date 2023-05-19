const { MOVEMENTS, MESSAGES } = require("./constants");
let connection;

/**
 * Matches input keys to game functionality.
 * @param {string} key - key(s) pressed
 */
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key in MOVEMENTS) {
    connection.write(`Move: ${MOVEMENTS[key]}`);
  } else if (key in MESSAGES) {
    connection.write(`Say: ${MESSAGES[key]}`);
  }
};

/**
 * Setup interface to handle user input from stdin.
 * @param {Socket} conn - our Socket connection, allowing us to write to the
 *                        server in handleUserInput
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;