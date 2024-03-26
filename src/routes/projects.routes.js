import express from "express";
import { ProjectController } from "../controllers/projects.controller.js";

export const RouterProjects = express.Router()

RouterProjects.get("/projects", ProjectController.getProjects)
RouterProjects.get("/projects/:id",ProjectController.getProject)
RouterProjects.post("/projects", ProjectController.create)
RouterProjects.put("/projects/:id", ProjectController.update)
RouterProjects.delete("/projects/:id", ProjectController.delete)