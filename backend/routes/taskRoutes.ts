import express from "express";
import { dummyTasksList } from "../data/taskList.js";

const router = express.Router();

router.get("", (req, res) => {
  res.json(dummyTasksList);
});

router.post("", (req, res) => {
  console.log(req.body);
  //res.json(dummyTasksList);
});

export default router;
