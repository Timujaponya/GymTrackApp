import equipmentRepository from "../repositories/equipmentRepository.js";

async function createEquipment(data) {
    if (!data.name) throw new Error("Equipment name must be provided");
    return await equipmentRepository.create(data);
}

async function getAllEquipments() {
    return await equipmentRepository.getAll();
}

async function updateEquipment(id, data) {
    if (!data || !id) throw new Error("Id and Data must be provided properly");
    return await equipmentRepository.updateById(id, data);
}

async function deleteEquipment(id) {
    if (!id) throw new Error("Id must be provided");
    return await equipmentRepository.deleteById(id);
}

async function findEquipmentById(id) {
    if (!id) throw new Error("Id must be provided");
    return await equipmentRepository.findById(id);
}

export { createEquipment, getAllEquipments, updateEquipment, deleteEquipment, findEquipmentById };