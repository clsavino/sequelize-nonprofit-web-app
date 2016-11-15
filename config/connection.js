/*
Make the connection to the databases and exports
*/
// Needed to see JawsDB database in MySQL workbench

var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  //if the server contains the JAWSDB_URL environment variable, it connects to the JawsDB database, connection credentials are hidden in the environment variable
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  //else, it falls back on the explicitly defined local database
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ocim'
    });
};

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
