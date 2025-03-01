import express from 'express';
import { createPost, getPosts, getPost, updatePost, deletePost } from '../controllers/postController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.post('/', upload.array('images', 5), createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.put('/:id', upload.array('images', 5), updatePost);
router.delete('/:id', deletePost);

export default router;
