import {
    createMuscleGroup,
    getAllMuscleGroups,
    updateMuscleGroup,
    deleteMuscleGroup,
    findMuscleGroupById
} from "../services/muscleGroupService.js";

export async function createMuscleGroupCtrl(req, res, next) {
    try {
        const data = await createMuscleGroup(req.body);
        res.status(201).json({ data });
    } catch (e) {
    next(e)
    }
}

export async function listMuscleGroupsCtrl(req, res, next) {
    try {
        const data = await getAllMuscleGroups();
        res.json({ data });
    } catch (e){
    next(e)
    }
}

export async function getMuscleGroupCtrl(req, res, next) {
    try {
        const data = await findMuscleGroupById(req.params.id);
        res.json({ data });
    } catch (e) {
    next(e)
    }
}

export async function updateMuscleGroupCtrl(req, res, next) {
    try {
        const data = await updateMuscleGroup(req.params.id, req.body);
        res.json({ data });
    } catch (e) {
    next(e)
    }
}

export async function deleteMuscleGroupCtrl(req, res, next) {
    try {
        const deleted = await deleteMuscleGroup(req.params.id);
        res.status(204).json(deleted).end();
    } catch (e) {
    next(e)
    }
}

export default {
    createMuscleGroupCtrl,
    listMuscleGroupsCtrl,
    getMuscleGroupCtrl,
    updateMuscleGroupCtrl,
    deleteMuscleGroupCtrl
};