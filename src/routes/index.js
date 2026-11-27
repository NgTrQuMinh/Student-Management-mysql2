import express from 'express';
import ClassRoute from './class.route.js';
import SubjectRoute from './subject.route.js';
import StudentRoute from './student.route.js';
import PointRoute from './point.route.js';
import UserRoute from './user.route.js';

const router = express.Router();

router.use('/class', ClassRoute);
router.use('/subject', SubjectRoute);
router.use('/student', StudentRoute);
router.use('/point', PointRoute);
router.use('/user', UserRoute);

export default router;