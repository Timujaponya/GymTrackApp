

import {
    createEquipment,
    getAllEquipments,
    updateEquipment,
    deleteEquipment,
    findEquipmentById
} from "../services/equipmentService.js";

export async function createEquipmentCtrl(req, res, next) {
    try {
        const data = await createEquipment(req.body);
        res.status(201).json({ data });
    } catch (e) {
        next(e)
    }
}

export async function listEquipmentsCtrl(req, res, next) {
    try {
        const data = await getAllEquipments();
        res.json({ data });
    } catch(e) {
        next(e)
    }
}

export async function getEquipmentCtrl(req, res, next) {
    try {
        const data = await findEquipmentById(req.params.id);
        res.json({ data });
    } catch (e) {
        next(e)
    }
}

export async function updateEquipmentCtrl(req, res, next) {
    try {
        const data = await updateEquipment(req.params.id, req.body);
        res.json({ data });
    } catch (e) {
        next(e)
    }
}

export async function deleteEquipmentCtrl(req, res, next) {
    try {
        const deleted = await deleteEquipment(req.params.id);
        res.status(204).json(deleted).end();
    } catch (e) {
        next(e)
    }
}

export default {
    createEquipmentCtrl,
    listEquipmentsCtrl,
    getEquipmentCtrl,
    updateEquipmentCtrl,
    deleteEquipmentCtrl
};