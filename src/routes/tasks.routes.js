import { Router } from "express";

import * as taskController from "../controllers/task.controller";

//routes is to url definition

const router = Router();

router.get("/", taskController.getTasksController);

router.post("/", taskController.postTaskController);

router.get("/:id", taskController.getTaskController);

router.delete("/:id", taskController.deleteTaskController);

router.get("/:id", taskController.getDoneTasks);

export default router;
