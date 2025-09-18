import User from '../models/User.js';


const getAll = async () => await User.find();
const create = async (model) => await User.create(model);
const findById = async (id) => await User.findById(id);
const updateById = async (id,model) => await User.findByIdAndUpdate(id,model,  { new: true, runValidators: true });
const deleteById = async (id) => await User.findByIdAndDelete(id);



export default {create, deleteById,findById,getAll,updateById};