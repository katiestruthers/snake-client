const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on('data', (message) => {
    console.log(message);
  });

  return conn;
};

module.exports = connect;