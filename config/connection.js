// Set up MySQL connection.
var mysql = require("mysql");
//var JAWSDB_URL = ('mysql://dq2aec4otasid54i:xkvohoyxl7ny5k3f@ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wu4wqk9g4x76j1wg');
//var connection;

//if (process.env.JAWSDB_URL) {
  //connection = mysql.createConnection(process.env.JAWSDB_URL);
  //} else {
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Enkidu#1969",
    database: "burgers_db"
  });
//};    

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
