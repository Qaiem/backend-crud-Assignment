import mongoose from "mongoose";

const Schema = mongoose.Schema;
const teacherSchema = new Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, unique: true },
    department: { type: String, required: true }
});

export const Teacher = mongoose.model("Teacher",teacherSchema);