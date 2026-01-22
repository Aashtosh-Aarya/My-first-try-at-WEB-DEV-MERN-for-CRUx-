require("./appMongoose");
const express = require("express");
const Task = require("./models/Task");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is some response from your Node.js Server.");
});

app.post("/add-task", async (req, res) => {
  const task = new Task({
    title: "Test Task",
    description: "Test Task Description",
  });

  await task.save();
  return res.status(201).send({ message: "Saved!" });
});

app.listen(5000, () => {
  console.log("Server is running.");
});
