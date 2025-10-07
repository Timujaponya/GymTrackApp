// src/controllers/Users.controller.js
import {
  createUser,
  getAllUsers,
  findUserById,
  updateUser,
  deleteUser,
} from "../services/userService.js";

// POST /api/Users
export async function createUserCtrl(req, res, next) {
  try {
    const data = await createUser(req.body);
    res.status(201).json({ data });
  } catch (e) {
    next(e)
  }
}

// GET /api/Users
export async function listUsersCtrl(req, res, next) {
  try {
    const users = await getAllUsers(req.query);
    res.json({ data: users });
  } catch(e) {
    next(e)
  }
}

// GET /api/Users/:id
export async function getUserCtrl(req, res, next) {
  try {
    const data = await findUserById(req.params.id);
    if (!data) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.json({ data });
  } catch (e) {
    next(e)
  }
}

// PATCH /api/Users/:id
export async function updateUserCtrl(req, res, next) {
  try {
    const data = await updateUser(req.params.id, req.body);
    if (!data) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.json({ data });
  } catch (e) {
    next(e)
  }
}

// DELETE /api/Users/:id
export async function deleteUserCtrl(req, res, next) {
  try {
    const deleted = await deleteUser(req.params.id);
    if (!deleted) return res.status(404).json({ error: "hata: veri bulunamadı" });
    res.status(204).end();
  } catch (e) {
    next(e)
  }
}


export default {createUserCtrl, deleteUserCtrl, listUsersCtrl, getUserCtrl, updateUserCtrl}