const { exec } = require("child_process");

const predictResult = (req, res) => {
  const {
    physics,
    chemistry,
    maths,
    category,
    dreamCollege,
  } = req.body;

  const command =
    `python ../ml-service/api/predict.py ` +
    `${physics} ${chemistry} ${maths} ${category} "${dreamCollege}"`;

  console.log(command);

  exec(command, (error, stdout, stderr) => {

    console.log("STDOUT:");
    console.log(stdout);

    console.log("STDERR:");
    console.log(stderr);

    console.log("ERROR:");
    console.log(error);

    if (error) {
      return res.status(500).json({
        error: error.message,
      });
    }

    try {
      const result = JSON.parse(stdout);
      res.json(result);
    } catch (err) {
      res.status(500).json({
        error: "Prediction parsing failed",
        stdout,
        stderr,
      });
    }
  });
};

module.exports = {
  predictResult,
};