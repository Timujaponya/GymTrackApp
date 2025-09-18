import eController from "../controllers/equipmentController.js";
import express from "express";

const router = express.Router();

router.get("/", eController.listEquipmentsCtrl);
router.post("/add", eController.createEquipmentCtrl);
router.put("/:id", eController.updateEquipmentCtrl);
router.delete("/:id", eController.deleteEquipmentCtrl);
router.get("/:id", eController.getEquipmentCtrl);

export default router;