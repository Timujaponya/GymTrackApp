import mongoose, { Model } from 'mongoose';
const {Schema, model} = mongoose;

const planSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title:{type:String, required:true, trim:true},
    isActive:{type:Boolean, default:true},
},
{timestamps:true}
);

const Plan = model("Plan", planSchema);

export default Plan;