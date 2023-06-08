//DOM elements reference
const createEventForm = document.getElementById("create-event");
const inputTitle = document.getElementById("title-input");
const inputBody = document.getElementById("floatingTextarea");
const inputDate = document.getElementById("date-input");
const rootDiv = document.getElementById("root");

var elementEventList = [];

//API routes URL
const testRoutGET = "http://localhost:3000/server-test";
const createEventPOST = "http://localhost:3000/create-new-event";
const listEventGET = "http://localhost:3000/event-list";

//POST form request
var createNewPost = (event) => {
    event.preventDefault();

    const newEvent = {
        title: inputTitle.value,
        body: inputBody.value,
        date: inputDate.value,
    };

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
    };

    fetch(createEventPOST, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("response: ", data);

            addEventCard(newEvent, data.eventID);
        })
        .catch((error) => {
            console.log("Error: OR ", error);
        });
};

//Creating new event (Event Listener)
createEventForm.addEventListener("submit", createNewPost);

function addEventCard(event, id) {
    console.log("Event and id:", event, id);
    rootDiv.innerHTML += `    
    <div class="container post-container" id="post-id-${id}">
        <img src="./assets/trash-can-icon.svg" alt="trash-can-icon" class="delete-icon">
        <h3>${event.title}</h3>
        <p>${event.body}</p>
        <p class="p-date">${event.date}</p>
    </div>`;
}

function bootEventList() {
    fetch(listEventGET, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("response: ", data);
            data.eventList.forEach((element) => {
                addEventCard(
                    {
                        title: element.title,
                        body: element.body,
                        date: element.date,
                    },
                    element.id
                );
            });
        })
        .catch((error) => {
            console.log("Error: OR ", error);
        });
}

bootEventList();
