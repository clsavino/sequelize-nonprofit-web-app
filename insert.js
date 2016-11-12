var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ocim'
});

connection.connect();

connection.query("LOAD DATA LOCAL INFILE './mow.csv' INTO TABLE mealsonwheels FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r\n' (Family,Driver,route,Day)", function(err, rows, fields) {
  if (err) throw err;
})
connection.query("LOAD DATA LOCAL INFILE './event.csv' INTO TABLE events FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r\n' (Type,Content,EventDate)", function(err, rows, fields) {
  if (err) throw err;
})
connection.query("LOAD DATA LOCAL INFILE './vol.csv' INTO TABLE volunteers FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r\n' (Name,Event,Phone)", function(err, rows, fields) {
  if (err) throw err;
})
connection.end();
