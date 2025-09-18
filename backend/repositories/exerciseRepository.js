import Exercise from '../models/Exercise.js';


const getAll = async () => await Exercise.find();
const create = async (model) => await Exercise.create(model);
const findById = async (id) => await Exercise.findById(id);
const updateById = async (id,model) => await Exercise.findByIdAndUpdate(id,model,  { new: true, runValidators: true });
const deleteById = async (id) => await Exercise.findByIdAndDelete(id);


// search fonksiyonu eklenebilir
// get all detaylandırılabilir


export default {getAll,create, findById, updateById, deleteById};