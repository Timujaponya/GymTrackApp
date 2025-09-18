import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const exerciseSchema = new Schema({
  name:{type:String, required:true, trim:true},
  muscleGroups:[{type:Schema.Types.ObjectId, ref:'MuscleGroup'}],
  equipment:[{type:Schema.Types.ObjectId, ref:'Equipment'}], 
  tags:[String],
  isActive:{ type: Boolean, default: true }
},
{timestamps:true}
);


exerciseSchema.index({ name: "text" });
exerciseSchema.index({ muscleGroups: 1 });
exerciseSchema.index({ tags: 1 });



const Exercise = model("Exercise", exerciseSchema);

export default Exercise;