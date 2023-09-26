import express from "express";
import { dummyTasksList } from "../data/taskList.js";

const router = express.Router();

router.get("", (req, res) => {
  res.json(dummyTasksList);
});

router.post("", (req, res) => {
  dummyTasksList.push(req.body);

  res.json(dummyTasksList);
});

router.delete("/:id", (req, res) => {
  const id = parseFloat(req.params.id);

  console.log(id);

  const deleteIndex = dummyTasksList.findIndex((task) => task.id === id);

  dummyTasksList.splice(1, deleteIndex);

  res.json(dummyTasksList);
});

router.patch("/:id", (req, res) => {
  const id = parseFloat(req.params.id);
});

export default router;
