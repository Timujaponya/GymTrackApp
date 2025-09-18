// src/controllers/Measurements.controller.js
import {
  createMeasurement,
  getAllMeasurements,
  findMeasurementById,
  updateMeasurement,
  deleteMeasurement,
} from "../services/measurementService.js";

// POST /api/Measurements
export async function createMeasurementCtrl(req, res, next) {
  try {
    const data = await createMeasurement(req.body);
    res.status(201).json({ data });
  } catch (e) {
    next(e)
  }
}

// GET /api/Measurements
export async function listMeasurementsCtrl(req, res, next) {
  try {
    const items = await getAllMeasurements();
    res.json({ items });
  } catch {
    next(e)
  }
}
// GET /api/Measurements/:id
export async function getMeasurementCtrl(req, res, next) {
  try {
    const data = await findMeasurementById(req.params.id);
    if (!data) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.json({ data });
  } catch (e) {
    next(e)
  }
}

// PATCH /api/Measurements/:id
export async function updateMeasurementCtrl(req, res, next) {
  try {
    const data = await updateMeasurement(req.params.id, req.body);
    if (!data) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.json({ data });
  } catch (e) {
    next(e)
  }
}

// DELETE /api/Measurements/:id
export async function deleteMeasurementCtrl(req, res, next) {
  try {
    const deleted = await deleteMeasurement(req.params.id);
    if (!deleted) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.status(204).end();
  } catch (e) {
    next(e)
  }
}


export default {createMeasurementCtrl, deleteMeasurementCtrl, listMeasurementsCtrl, getMeasurementCtrl, updateMeasurementCtrl}