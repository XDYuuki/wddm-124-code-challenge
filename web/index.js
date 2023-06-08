const url = new URL("http://localhost:3000/server-test");

fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error ", error);
    });
