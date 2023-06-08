var eventModel = require("../models/EventModel");

class EventController {
    constructor(model) {
        this.model = model;
    }
    createEvent(req, res) {
        console.log("POST request content: ", req.body);

        let newEventRet = eventModel.addNewEvent(req.body);
        if (newEventRet) {
            res.status(200).send({
                status: "New event created!",
                eventID: newEventRet,
            });
            return;
        }
        res.status(400).send({ status: "Problema to add new event." });
    }

    deleteEvent(req, res) {}

    listEvents(req, res) {
        console.log("List Request");
        res.send({ eventList: eventModel.eventList });
    }

    testingSErver(req, res) {
        console.log("Server Test GET Request");
        res.status(200).send({ serverTestingResponse: "Server Working Well!" });
    }
}

module.exports = new EventController(eventModel);
