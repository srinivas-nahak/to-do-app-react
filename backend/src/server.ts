import express from "express";
import taskRoutes from "../routes/taskRoutes.js";
import cors from "cors";

const app = express();

//Enabling JSON parsing
app.use(express.json());
app.use(cors());

app.use("/api/tasks/", taskRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});

app.listen(5183, () => console.log("Server running on port: 5183"));
