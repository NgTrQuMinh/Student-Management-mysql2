import express from 'express';
import ClassRoute from './class.route.js';
import SubjectRoute from './subject.route.js';
const router = express.Router();

router.use('/class', ClassRoute);
router.use('/subject', SubjectRoute);

export default router;