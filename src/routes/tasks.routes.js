import express from "express";
import { TaskController } from "../controllers/tasks.controller.js";

export const TaskRouter = express.Router();

TaskRouter.get("/tasks", TaskController.getTasks)
TaskRouter.get("/tasks/:id",TaskController.getTask)
TaskRouter.post("/tasks", TaskController.create)
TaskRouter.put("/tasks/:id", TaskController.update)
TaskRouter.delete("/tasks/:id", TaskController.delete)