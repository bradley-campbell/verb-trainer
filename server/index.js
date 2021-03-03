const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { getConjug, getTable, getDefinition } = require("./handlers");

const PORT = 3333;

let app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/conjug", getConjug);

app.get("/table", getTable);

app.get("/definition", getDefinition);

const server = app.listen(PORT, () => {
  console.info("🌍 Listening on port " + server.address().port);
});
