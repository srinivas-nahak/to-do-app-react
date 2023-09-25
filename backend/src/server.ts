import express from "express";
import taskRoutes from "../routes/taskRoutes.js";

const app = express();

//Enabling JSON parsing
app.use(express.json());

app.use("/api/tasks/", taskRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});

app.listen(5183, () => console.log("Server running on port: 5173"));
