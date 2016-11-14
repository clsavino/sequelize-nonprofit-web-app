# sequelize-nonprofit-web-app

a) How to load database.

 1) Create database 'ocim' using mysql command line or workbench
 	create database ocim;
 2) Sync the tables
 	cd sequelize-nonprofit-web-app
 	node sync.js
 3) Load the data
 	sequelize-nonprofit-web-app
 	squelize db:migrate

 Check if data is present in tables,
  select * from mealsonwheels;
