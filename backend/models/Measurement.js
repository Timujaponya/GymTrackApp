import mongoose from 'mongoose';
const { Schema, model} = mongoose;

const MeasurementSchema = new Schema({
    user: {type:Schema.Types.ObjectId, ref:'User', required:true},
    measurementDate: {type:Date, default:Date.now()},
    weightKg: Number,
    waistCm: Number,
    bodyFatPct: Number
},
{timestamps:true}
);

MeasurementSchema.pre("validate", function(next){
    const hasAny = 
        this.weightKg != null ||
        this.waistCm != null ||
        this.bodyFatPct != null;

    if(!hasAny){
        const msg = "En az bir alan zorunlu: weight, waist, bodyfat.";
        this.invalidate("weightKg", msg);
        this.invalidate("waistCm", msg);
        this.invalidate("bodyFatPct", msg);
    }
    next();
});

const Measurement = model('Measurement', MeasurementSchema);

export default Measurement;

