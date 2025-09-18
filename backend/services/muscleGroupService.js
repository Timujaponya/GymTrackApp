import muscleGroupRepository from "../repositories/muscleGroupRepository.js";

async function createMuscleGroup(data) {
    if (!data.name) throw new Error("Muscle group name must be provided");
    return await muscleGroupRepository.create(data);
}

async function getAllMuscleGroups() {
    return await muscleGroupRepository.getAll();
}

async function updateMuscleGroup(id, data) {
    if (!data || !id) throw new Error("Id and Data must be provided properly");
    return await muscleGroupRepository.updateById(id, data);
}

async function deleteMuscleGroup(id) {
    if (!id) throw new Error("Id must be provided");
    return await muscleGroupRepository.deleteById(id);
}

async function findMuscleGroupById(id) {
    if (!id) throw new Error("Id must be provided");
    return await muscleGroupRepository.findById(id);
}

export { createMuscleGroup, getAllMuscleGroups, updateMuscleGroup, deleteMuscleGroup, findMuscleGroupById };