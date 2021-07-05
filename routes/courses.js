import express from 'express';
import { createCourse, getCourses } from '../controllers/courses.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getCourses);
router.post('/', auth, createCourse);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch("/:id/likePost", auth, likePost);

export default router;