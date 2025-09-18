import mController from "../controllers/measurementController.js";

import express from "express";

const router = express.Router();

router.get("/", mController.listMeasurementsCtrl);
router.post("/add", mController.createMeasurementCtrl);
router.put("/:id", mController.updateMeasurementCtrl);
router.delete("/:id", mController.deleteMeasurementCtrl);
router.get("/:id", mController.getMeasurementCtrl);


export default router;