import express from 'express';

import { getCourses, createCourse, updateCourse, deleteCourse, likeCourse } from '../controllers/courses.js';

const router = express.Router();

router.get('/', getCourses);
router.post('/', createCourse);
router.patch('/:id', updateCourse);
router.delete('/:id', deleteCourse);
router.patch('/:id/LikeCourse', likeCourse);

export default router;