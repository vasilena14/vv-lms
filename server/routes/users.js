import express from 'express';

import { signin, signup } from '../controllers/user.js';

const router = express.Router();

router.course('/signin', signin);
router.course('/signup', signup);

export default router;