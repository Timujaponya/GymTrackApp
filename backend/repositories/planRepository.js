import Plan from '../models/Plan.js';


const getAll = async () => await Plan.find();
const create = async (model) => await Plan.create(model);
const findById = async (id) => await Plan.findById(id);
const updateById = async (id,model) => await Plan.findByIdAndUpdate(id,model,  { new: true, runValidators: true });
const deleteById = async (id) => await Plan.findByIdAndDelete(id);



export default {create, deleteById,findById,getAll,updateById};