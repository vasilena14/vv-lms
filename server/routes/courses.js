import express from 'express';

import { getCourses, createCourse, updateCourse, deleteCourse, likeCourse } from '../controllers/courses.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCourses);
router.post('/', auth, createCourse);
router.patch('/:id', auth, updateCourse);
router.delete('/:id', auth, deleteCourse);
router.patch('/:id/LikeCourse', auth, likeCourse);

export default router;