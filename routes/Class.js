import express from "express"
import {createClass, getClasses, getClassById, updateClass, deleteClass} from "../controllers/Class.js"

const router = express.Router();

// Create a new class
router.post('/', createClass);

// Get all classes
router.get('/', getClasses);

// Get a specific class by ID
router.get('/:id', getClassById);

// Update a class by ID
router.put('/:id', updateClass);

// Delete a class by ID
router.delete('/:id', deleteClass);

export default router;