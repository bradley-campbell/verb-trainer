const { spawn } = require("child_process");

const getConjug = async (req, res) => {
  const { verb, mood, temps, personne } = req.query;
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
    console.log(dataString);
    res.status(200).json({ status: 200, data: dataString });
  });
};

module.exports = { getConjug };
