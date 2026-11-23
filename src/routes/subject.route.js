import express from 'express';
import * as SubjectController from '../controller/SubjectController.js';
import { validate } from '../middleware/validate.js';
import { createSubjectSchema, updateSubjectSchema } from '../validations/subject.validation.js';
const SubjectRoute = express.Router();

SubjectRoute.get('/', SubjectController.getAllSubject);
SubjectRoute.get('/:id', SubjectController.getSubjectById);
SubjectRoute.post('/', validate(createSubjectSchema), SubjectController.createSubject);
SubjectRoute.put('/:id', validate(updateSubjectSchema), SubjectController.updateSubject);
SubjectRoute.patch('/:id', validate(updateSubjectSchema), SubjectController.updateSubject);
SubjectRoute.delete('/:id', SubjectController.deleteSubject);

export default SubjectRoute;
