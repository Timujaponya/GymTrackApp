import Measurement from '../models/Measurement.js';


const getAll = async () => await Measurement.find();
const create = async (model) => await Measurement.create(model);
const findById = async (id) => await Measurement.findById(id);
const updateById = async (id,model) => await Measurement.findByIdAndUpdate(id,model,  { new: true, runValidators: true });
const deleteById = async (id) => await Measurement.findByIdAndDelete(id);



export default {getAll,create, findById, updateById, deleteById};