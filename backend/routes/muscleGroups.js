import mgController from "../controllers/muscleGroupController.js";
import express from "express";

const router = express.Router();

router.get("/", mgController.listMuscleGroupsCtrl);
router.post("/add", mgController.createMuscleGroupCtrl);
router.put("/:id", mgController.updateMuscleGroupCtrl);
router.delete("/:id", mgController.deleteMuscleGroupCtrl);
router.get("/:id", mgController.getMuscleGroupCtrl);

export default router;