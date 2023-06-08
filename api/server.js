const app = require("./App");

app.express.listen(app.PORT, (req, res) => {
    console.log("Start listening port: ", app.PORT);
});
