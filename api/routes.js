const express = require("express");
const routes = express.Router();
const controller = require("./controllers/EventController");

routes.get("/server-test", controller.testingSErver);

routes.get("/event-list", controller.listEvents);

routes.post("/create-new-event", controller.createEvent);

routes.delete("/delete-event", controller.deleteEvent);

module.exports = routes;
