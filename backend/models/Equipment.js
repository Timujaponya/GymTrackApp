import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const equipmentSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true }
}, { timestamps: true });

const Equipment = model('Equipment', equipmentSchema);

export default Equipment;