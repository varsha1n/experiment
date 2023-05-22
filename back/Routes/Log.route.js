const express = require("express");
const logRoute = express.Router();
const logModel = require("../Model/Log");

// To Get Log Details By ID
logRoute.route("/idLog/:id").get((req, res) => {
  const id = req.params.id;
  logModel
    .findById(id)
    .then((log) => {
      res.json(log);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

// To Get Log Details By Date
logRoute.route("/DateLog/:date").get((req, res) => {
  const date = req.params.date;
  logModel
    .find({ Date: date })
    .then((logs) => {
      res.json(logs);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

// To Get Log Details By Date
logRoute.route("/TimeLog/:time").get((req, res) => {
  const time = req.params.time;
  logModel
    .find({ Time: time })
    .then((logs) => {
      res.json(logs);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    });
});
// To Get Log Details By Severity
logRoute.route("/SeverityLog/:severity").get((req, res) => {
  const severity = req.params.severity;
  logModel
    .find({ Severity: severity })
    .then((logs) => {
      res.json(logs);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

// To Get Log Details By Hostname
logRoute.route("/HostnameLog/:hostname").get((req, res) => {
  const hostname = req.params.hostname;
  logModel
    .find({ Hostname: hostname })
    .then((logs) => {
      res.json(logs);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

// To Get Log Details By Message
logRoute.route("/MessageLog/:message").get((req, res) => {
  const message = req.params.message;
  logModel
    .find({ Message: message })
    .then((logs) => {
      res.json(logs);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

module.exports = logRoute;
