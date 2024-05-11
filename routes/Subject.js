import express from "express";
import {createSubject, getSubjects, getSubjectById, updateSubject, deleteSubject,} from "../controllers/subjectController.js";

const router = express.Router();

// Create a new subject
router.post("/", createSubject);

// Get all subjects
router.get("/", getSubjects);

// Get a specific subject by ID
router.get("/:id", getSubjectById);

// Update a subject by ID
router.put("/:id", updateSubject);

// Delete a subject by ID
router.delete("/:id", deleteSubject);

export default router;
