
sequelize model:create --name=Event --attributes "Type:string,Content:string,EventDate:Date"
sequelize model:create --name=Volunteer --attributes "Name:string,Event:string,Phone:string"
sequelize model:create --name=Mealsonwheel --attributes "Family:string,Driver:string,route:string,day:string"
node sync.js
node insert.js
