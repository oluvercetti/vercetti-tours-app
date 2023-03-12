const express = require("express"); // use express to create server instance
require("./db/mongoose");
// const allRouters = require("./routers"); //Commented because there are no routers same as line 8

const app = express();

app.use(express.json());
// app.use(allRouters);

module.exports = { path: "/", handler: app };