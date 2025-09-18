import eController from "../controllers/exerciseController.js";

import express from "express";

const router = express.Router();

router.get("/", eController.listExercisesCtrl);
router.post("/add", eController.createExerciseCtrl);
router.put("/:id", eController.updateExerciseCtrl);
router.delete("/:id", eController.deleteExerciseCtrl);
router.get("/:id", eController.getExerciseCtrl);


export default router;