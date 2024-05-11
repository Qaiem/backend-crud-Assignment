import mongoose from "mongoose";

const Schema = mongoose.Schema;
const classSchema = new Schema({
    className: { type: String, required: true },
    roomNumber: { type: String }
});

export const Class = mongoose.model("Class",classSchema);