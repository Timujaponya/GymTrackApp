// src/controllers/Plans.controller.js
import {
  createPlan,
  getAllPlans,
  findPlanById,
  updatePlan,
  deletePlan,
} from "../services/planService.js";

// POST /api/Plans
export async function createPlanCtrl(req, res, next) {
  try {
    const data = await createPlan(req.body);
    res.status(201).json({ data });
  } catch (e) {
    next(e)
  }
}

// GET /api/Plans
export async function listPlansCtrl(req, res, next) {
  try {
    const { items, total, page, limit } = await getAllPlans(req.query);
    res.json({ data: items, page, limit, total });
  } catch {
    next(e)
  }
}

// GET /api/Plans/:id
export async function getPlanCtrl(req, res, next) {
  try {
    const data = await findPlanById(req.params.id);
    if (!data) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.json({ data });
  } catch (e) {
    next(e)
  }
}

// PATCH /api/Plans/:id
export async function updatePlanCtrl(req, res, next) {
  try {
    const data = await updatePlan(req.params.id, req.body);
    if (!data) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.json({ data });
  } catch (e) {
    next(e)
  }
}

// DELETE /api/Plans/:id
export async function deletePlanCtrl(req, res, next) {
  try {
    const deleted = await deletePlan(req.params.id);
    if (!deleted) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.status(204).end();
  } catch (e) {
    next(e)
  }
}


export default {createPlanCtrl, deletePlanCtrl, listPlansCtrl, getPlanCtrl, updatePlanCtrl}