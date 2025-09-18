import exerciseRepository from "../repositories/exerciseRepository.js";

async function createExercise(data){
    if(!data.name) throw new Error("Exercise title must be provided");
    return await exerciseRepository.create(data);
}

async function getAllExercises(){
    // filtreleme veya diğer düzenlemeler gerekirse burada olabilir
    const exercises = await exerciseRepository.getAll();
    return exercises;
}


async function updateExercise(id, data){
    if(!data || !id) throw new Error("Id and Data must be provided properly");
    return await exerciseRepository.updateById(id, data);
}


async function deleteExercise(id){
    if(!id) throw new Error("Id must be provided");
    return await exerciseRepository.deleteById(id);
}



async function findExerciseById(id){
    if(!id) throw new Error("Id must be provided");
    return await exerciseRepository.findById(id);
}




export {createExercise, deleteExercise, findExerciseById, updateExercise, getAllExercises};