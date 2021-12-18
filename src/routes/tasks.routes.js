import { Router } from "express";

import * as taskController from "../controllers/task.controller";

//routes is to url definition

const router = Router();

router.get("/", taskController.getTasksController);

router.post("/", taskController.postTaskController);

router.get("/done", taskController.getDoneTasks);

router.get("/:id", taskController.getTaskController);

router.delete("/:id", taskController.deleteTaskController);

export default router;
