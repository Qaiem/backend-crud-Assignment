import express from 'express';
import {createTeacher, getTeachers, getTeacherById, updateTeacher, deleteTeacher} from '../controllers/teacherController.js';

const router = express.Router();

// Create a new teacher
router.post('/', createTeacher);

// Get all teachers
router.get('/', getTeachers);

// Get a specific teacher by ID
router.get('/:id', getTeacherById);

// Update a teacher by ID
router.put('/:id', updateTeacher);

// Delete a teacher by ID
router.delete('/:id', deleteTeacher);

export default router;
