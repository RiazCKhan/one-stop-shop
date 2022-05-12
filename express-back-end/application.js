const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./database");

const items = require("./routes/items");

module.exports = function application( ENV ) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  app.use("/api", items(db));

  app.close = function() {
    return db.end();
  };

  return app;
};
