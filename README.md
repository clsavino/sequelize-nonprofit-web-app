# sequelize-nonprofit-web-app

a) How to load the local MySQL database:

 1) Create database 'ocim' using mysql command line or workbench
 	create database ocim;
 2) Sync the tables
 	cd sequelize-nonprofit-web-app
 	node sync.js
 3) Load the data
 	?? sequelize-nonprofit-web-app
 	squelize db:migrate

 Check if data is present in tables,
  select * from mealsonwheels;

b) To load the JAWSDB database:

 1)Make a connection in MYSQL workbench with the setting listed on the JAWSDB addon page on heroku for the app. Be careful not to add any spaces and leave the default schema blank

 2) Export the mysql string found on the JAWSDB addon page for the heroku app in the git bash command line

  export JAWSDB_URL=mysql://wpkks3jakq5d7ibj:f0c2j7rj0a7h5tjg@enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/t6n3oj0tvhjoic36

 3)echo that command in git to see string
  echo $JAWSDB_URL

 4) Sync the tables in the JAWSDB
  node sync.js

 5)Check for tables at the MySQL workbench connection for JAWSDB
  Click on strange database name given to the database and see tables or in the editor type
  show tables;





