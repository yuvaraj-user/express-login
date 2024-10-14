const usercontroller = require("./usercontroller");
const authcontroller = require("./AuthController");
const dashboardcontroller = require("./DashboardController");


var controllers = {};
controllers.user = usercontroller;
controllers.auth = authcontroller;
controllers.dashoboard = dashboardcontroller;
module.exports = controllers;