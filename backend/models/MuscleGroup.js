// models/MuscleGroup.js
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const muscleGroupSchema = new Schema({
  name: { type: String, required: true, unique: true }
});

export default model('MuscleGroup', muscleGroupSchema);