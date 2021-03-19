import express from 'express';

import { getCourses, createCourse, updateCourse } from '../controllers/courses.js';

const router = express.Router();

router.get('/', getCourses);
router.post('/', createCourse);
router.patch('/:id', updateCourse);

export default router;