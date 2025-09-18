import Equipment from "../models/Equipment.js";

async function create(data) {
    return await Equipment.create(data);
}

async function getAll() {
    return await Equipment.find({});
}

async function updateById(id, data) {
    return await Equipment.findByIdAndUpdate(id, data, { new: true });
}

async function deleteById(id) {
    return await Equipment.findByIdAndDelete(id);
}

async function findById(id) {
    return await Equipment.findById(id);
}

export default { create, getAll, updateById, deleteById, findById };