import express from "express";
import { createComment, likeComment } from "../controller/comment.js";
import { auth } from "../middleware/authentication.js";
const router = express.Router();

router.post("/:id/comment", auth, createComment);
router.patch("/:id/likeComment", auth, likeComment);
export default router;
