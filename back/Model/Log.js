const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Logs = new Schema(
  {
    Date: {
      type: String,
    },
    Time: {
      type: String,
    },
    Severity: {
      type: String,
    },
    Hostname: {
      type: String,
    },
    Message: {
      type: String,
    },
  },
  {
    collection: "logs",
  }
);

module.exports = mongoose.model("Log", Logs);
