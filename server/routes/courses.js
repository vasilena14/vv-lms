import express from 'express';

import { getCourses, createCourse, updateCourse, deleteCourse } from '../controllers/courses.js';

const router = express.Router();

router.get('/', getCourses);
router.post('/', createCourse);
router.patch('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;