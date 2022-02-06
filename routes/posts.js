import express from "express";
import { getPostsBySearch,getPosts, getPost, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js"; // In node codes add .js in react no need to add .js
import auth from '../middleware/auth.js';


const router = express.Router();
router.get('/',getPosts);
router.get('/search',getPostsBySearch);
router.get('/:id', getPost);
router.post('/', auth, createPost);

router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);


export default router;