const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
// const User     = require('./user');




const taskSchema = new Schema({
  title: String,
  description: String,
  doneyet: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: 'User'}

}, {timestamps: true});

const Task = mongoose.model("Task", taskSchema);



module.exports = Task;