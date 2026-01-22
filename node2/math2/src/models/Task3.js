const { model, Schema } = require("mongoose");

const TaskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, required: false, ref: "User" }, // Set to false for testing
  },
  { timestamps: true },
);

// Ensure you are exporting the result of model()
const TaskModel = model("Task", TaskSchema);
module.exports = TaskModel;
