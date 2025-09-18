import MuscleGroup from "../models/MuscleGroup.js";

async function create(data) {
    return await MuscleGroup.create(data);
}

async function getAll() {
    return await MuscleGroup.find({});
}

async function updateById(id, data) {
    return await MuscleGroup.findByIdAndUpdate(id, data, { new: true });
}

async function deleteById(id) {
    return await MuscleGroup.findByIdAndDelete(id);
}

async function findById(id) {
    return await MuscleGroup.findById(id);
}

export default { create, getAll, updateById, deleteById, findById };