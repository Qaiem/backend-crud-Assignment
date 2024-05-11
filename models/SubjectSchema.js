import mongoose from "mongoose";


const Schema = mongoose.Schema;
const subjectSchema = new mongoose.Schema({
    subjectName: { type: String, required: true }
});

export const Subject = mongoose.model("Subject",subjectSchema)