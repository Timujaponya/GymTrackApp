import measurementRepository from "../repositories/measurementRepository.js";

async function createMeasurement(data){
    if(!data.user) throw new Error("Measurement user must be provided");
    return await measurementRepository.create(data);
}

async function getAllMeasurements(){
    // filtreleme veya diğer düzenlemeler gerekirse burada olabilir
    return await measurementRepository.getAll();
}


async function updateMeasurement(id, data){
    if(!data || !id) throw new Error("Id and Data must be provided properly");
    return await measurementRepository.updateById(id, data);
}


async function deleteMeasurement(id){
    if(!id) throw new Error("Id must be provided");
    return await measurementRepository.deleteById(id);
}



async function findMeasurementById(id){
    if(!id) throw new Error("Id must be provided");
    return await measurementRepository.findById(id);
}




export {createMeasurement, deleteMeasurement, findMeasurementById, updateMeasurement, getAllMeasurements}