const { spawn, exec } = require("child_process");
const { stringify } = require("querystring");
const { organizeData } = require("./organizeData");
const fetch = require("node-fetch");
require("dotenv").config();

const getConjug = async (req, res) => {
  const { verb, mood, personne } = req.query;
  const temps = mood === "Imperatif" ? "Imperatif Présent" : req.query.temps; // mlconjug3 uses "Imperatif Présent" instead of simply "Présent"
  let dataString = "";

  const conjug = spawn("python3", [
    "-W",
    "ignore",
    "getVerb.py",
    verb,
    mood,
    temps,
    personne,
  ]);

  conjug.stdout.on("data", (data) => {
    dataString = data.toString().trim();
    res.status(200).json({ status: 200, data: dataString });
  });
};

const getTable = async (req, res) => {
  const { verb, mood, tense } = req.query;
  const verbTable = spawn("mlconjug3", [verb]);

  verbTable.stdout.on("data", (data) => {
    const parsedData = JSON.parse(data);
    res
      .status(200)
      .json({ status: 200, data: organizeData(parsedData, verb)[mood][tense] });
  });
};

const getDefinition = async (req, res) => {



  const fetchDefinition = async () => {
    const url =
      "https://od-api.oxforddictionaries.com/api/v2/entries/fr/picoler";
    const reqObj = {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        app_key: process.env.APP_KEY,
        app_id: process.env.APP_ID,
      },
    };
    const data = await fetch(url, reqObj);
    const parsed = await data.json();
    console.log(parsed);
  };


};

module.exports = { getConjug, getTable, getDefinition };
