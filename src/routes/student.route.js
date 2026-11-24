import express from 'express';
import * as StudentController from '../controller/StudentController.js';
import { validate } from '../middleware/validate.js';
import { createStudentSchema, updateStudentSchema } from '../validations/student.validation.js';

const StudentRoute = express.Router();

StudentRoute.get('/', StudentController.getAllStudents);
StudentRoute.get('/:id', StudentController.getStudentById);
StudentRoute.post('/', validate(createStudentSchema), StudentController.createStudents);
StudentRoute.put('/:id', validate(updateStudentSchema), StudentController.updateStudents);
StudentRoute.delete('/:id', StudentController.deleteStudents);

export default StudentRoute;