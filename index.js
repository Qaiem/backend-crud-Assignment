import express from 'express'
import dotenv from 'dotenv'
import {DBConnect} from "./config/database.js"
import {ErrorHandling} from "./middleware/ErrorHandling.js"
import TeacherRoutes from "./routes/Teacher.js"
import ClassRoutes from "./routes/Class.js"
import SubjectRoutes from "./routes/Subject.js"

const app = express()

dotenv.config();

DBConnect()

const PORT = process.env.PORT || 3500

app.use(express.json());

app.use(express.json()); // Middleware to parse JSON requests

// Teacher Routes
app.use('/teacher', TeacherRoutes);

// Class Routes
app.use('/class', ClassRoutes);

// Subject Routes
app.use('/subject', SubjectRoutes);

// Root route
app.get('/', (req, res) => res.send("API is running"));

// Route not found
app.use((req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

// Error handler middleware
app.use(ErrorHandling);

app.listen(PORT, () =>{
    console.log(`Server is Running on port ${PORT}`)
} )


