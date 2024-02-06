const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: "String",
    required: [true, "must have name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: "Boolean",
    default: false,
  },
});

module.exports = model("Task", taskSchema);
