const express = require("express");
const cors = require("cors");
const routes = require("./routes");

class App {
    express;
    PORT = 3000;

    constructor() {
        this.express = express();

        this.usingCors();
        this.midlewares();
        this.routes();
    }

    routes() {
        this.express.use(routes);
    }

    midlewares() {
        this.express.use(express.json());
    }

    usingCors() {
        this.express.use(cors());
    }
}

module.exports = new App();
