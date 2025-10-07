import {
  createExercise,
  getAllExercises,
  findExerciseById,
  updateExercise,
  deleteExercise,
} from "../services/exerciseService.js";

// POST /api/exercises
export async function createExerciseCtrl(req, res, next) {
  try {
    const data = await createExercise(req.body);
    res.status(201).json({ data });
  } catch (e) {
    next(e)
  }
}

// GET /api/exercises
export async function listExercisesCtrl(req, res, next) {
  try {
    const items = await getAllExercises(req.query);
    res.json({ data: items });
  } catch (e) {
    next(e)
  }
}

// GET /api/exercises/:id
export async function getExerciseCtrl(req, res, next) {
  try {
    const data = await findExerciseById(req.params.id);
    if (!data) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.json({ data });
  } catch (e) {
    next(e)
  }
}

// PATCH /api/exercises/:id
export async function updateExerciseCtrl(req, res, next) {
  try {
    const data = await updateExercise(req.params.id, req.body);
    if (!data) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.json({ data });
  } catch (e) {
    next(e)
  }
}

// DELETE /api/exercises/:id
export async function deleteExerciseCtrl(req, res, next) {
  try {
    const deleted = await deleteExercise(req.params.id);
    if (!deleted) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.status(204).json(deleted).end();
  } catch (e) {
    next(e)
  }
}


export default {createExerciseCtrl, deleteExerciseCtrl, listExercisesCtrl, getExerciseCtrl, updateExerciseCtrl}
