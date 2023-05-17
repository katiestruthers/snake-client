const net = require("net");
const { IP, PORT, ENCODING } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding(ENCODING);

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: KTS");
  });

  conn.on("data", (message) => {
    console.log(message);
  });

  return conn;
};

module.exports = connect;