var model = require("../models/EventModel");

class EventController {
    constructor(model) {
        this.model = model;
    }

    createEvent(req, res) {}
    deleteEvent(req, res) {}
    editEvent(req, res) {}
    listEvents(req, res) {}

    testingSErver(req, res) {
        console.log("Server Test GET Request");
        res.status(200).send({ serverTestingResponse: "Server Working Well!" });
    }
}

module.exports = new EventController(model);
