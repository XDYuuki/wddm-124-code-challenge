// {
//     id: 0,
//     title: "",
//     body: "",
//     date: new Date(),
// },

class EventModel {
    constructor() {
        this.eventList = [];
    }

    addNewEvent(event) {
        if (event) {
            console.log("Tamanho da lista: ", this.eventList.length);
            let listSize = this.eventList.length;
            let newID;
            if (listSize > 0) {
                newID = listSize + 1;
            } else {
                newID = 1;
            }

            let inputEvent = {
                id: newID,
                title: event.title,
                body: event.body,
                date: new Date(event.date),
            };

            console.log("Input Event: ", inputEvent);

            this.eventList.push(inputEvent);

            return inputEvent.id;
        }
        return false;
    }

    testMethod() {
        console.log("Model method testing");
    }
}

module.exports = new EventModel();
