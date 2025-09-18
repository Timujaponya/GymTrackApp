import planRepository from "../repositories/planRepository.js";

async function createPlan(data){
    if(!data.title) throw new Error("Plan title must be provided");
    return await planRepository.create(data);
}

async function getAllPlans(){
    // filtreleme veya diğer düzenlemeler gerekirse burada olabilir
    return await planRepository.getAll();
}


async function updatePlan(id, data){
    if(!data || !id) throw new Error("Id and Data must be provided properly");
    return await planRepository.updateById(id, data);
}


async function deletePlan(id){
    if(!id) throw new Error("Id must be provided");
    return await planRepository.deleteById(id);
}



async function findPlanById(id){
    if(!id) throw new Error("Id must be provided");
    return await planRepository.findById(id);
}




export {createPlan, deletePlan, findPlanById, updatePlan, getAllPlans}