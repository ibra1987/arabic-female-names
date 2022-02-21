const { Schema, model } = require("mongoose");

const femaleNameSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },

  Meaning: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});

module.exports = femaleNameModel = model("femaleName", femaleNameSchema);
