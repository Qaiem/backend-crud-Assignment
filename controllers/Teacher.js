import {Teacher} from "../models/TeacherSchema.js"

export const createTeacher = async (req, res, next) => {
    try {
        const { name, subject, email } = req.body;

        if (!name || !subject || !email) {
            return res.status(400).json({ error: 'Bad request', details: 'Missing name, subject, or email' });
        }

        const newTeacher = { name, subject, email };

        const newTeacherInstance = new Teacher(newTeacher);

        await newTeacherInstance.save();

        return res.status(201).json(newTeacherInstance);

    } catch (error) {
        next(error);
    }
};

export const getTeachers = async (req, res, next) => {
    try {
        const teachers = await Teacher.find();

        if (teachers.length === 0) {
            return res.json({ msg: "Teachers not found" });
        }

        return res.status(200).json(teachers);

    } catch (error) {
        next(error);
    }
};

export const getTeacherById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const teacher = await Teacher.findById(id);
        if (!teacher) {
            return res.status(404).json({ msg: "No teacher found" });
        }

        return res.status(200).json(teacher);
    } catch (error) {
        next(error);
    }
};

export const updateTeacher = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { name, subject, email } = req.body;

        const teacherToUpdate = { name, subject, email };
        const updatedTeacher = await Teacher.findByIdAndUpdate(id, teacherToUpdate, { new: true });

        if (!updatedTeacher) {
            return res.status(404).json({ msg: "Teacher not found" });
        }

        return res.status(200).json(updatedTeacher);
    } catch (error) {
        next(error);
    }
};

export const deleteTeacher = async (req, res, next) => {
    try {
        const id = req.params.id;
        const teacherToDelete = await Teacher.findByIdAndDelete(id);

        if (!teacherToDelete) {
            return res.status(404).json({ msg: "Teacher not found" });
        }

        return res.status(200).json({ msg: "Teacher deleted successfully" });
    } catch (error) {
        next(error);
    }
};