import {Class} from "../models/ClassSchema.js"

export const createClass = async (req, res, next) => {
    try {
        const newClass = new Class(req.body);
        await newClass.save();
        res.status(201).json(newClass);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getClasses = async (req, res, next) => {
    try {
        const classes = await Class.find();
        res.json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getClassById = async (req, res, next) => {
    try {
        const classObj = await Class.findById(req.params.id);
        if (!classObj) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.json(classObj);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateClass = async (req, res, next) => {
    try {
        const classObj = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!classObj) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.json(classObj);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteClass = async (req, res, next) => {
    try {
        const classObj = await Class.findByIdAndDelete(req.params.id);
        if (!classObj) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.json({ message: 'Class deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};