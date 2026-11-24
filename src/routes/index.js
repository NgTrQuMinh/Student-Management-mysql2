import express from 'express';
import ClassRoute from './class.route.js';
import SubjectRoute from './subject.route.js';
import StudentRoute from './student.route.js';

const router = express.Router();

router.use('/class', ClassRoute);
router.use('/subject', SubjectRoute);
router.use('/student', StudentRoute);

export default router;