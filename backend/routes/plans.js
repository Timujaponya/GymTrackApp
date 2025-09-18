import pController from "../controllers/planController.js";

import express from "express";

const router = express.Router();

router.get("/", pController.listPlansCtrl);
router.post("/add", pController.createPlanCtrl);
router.put("/:id", pController.updatePlanCtrl);
router.delete("/:id", pController.deletePlanCtrl);
router.get("/:id", pController.getPlanCtrl);


export default router;