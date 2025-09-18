import uController from "../controllers/userController.js";

import express from "express";

const router = express.Router();

router.get("/", uController.listUsersCtrl);
router.post("/add", uController.createUserCtrl);
router.put("/:id", uController.updateUserCtrl);
router.delete("/:id", uController.deleteUserCtrl);
router.get("/:id", uController.getUserCtrl);


export default router;