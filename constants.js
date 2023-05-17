const IP = "localhost";
const PORT = 50541;
const ENCODING = 'utf-8';

const MOVEMENTS = {
  w: 'up',
  a: 'left',
  s: 'down',
  d: 'right'
};

const MESSAGES = {
  b: 'Bye!',
  h: 'Hello!',
  i: "I'm winning!"
};

module.exports = {
  IP,
  PORT,
  ENCODING,
  MOVEMENTS,
  MESSAGES
};