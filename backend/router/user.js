import express from "express";
import {
  editUser,
  follow,
  getUserById,
  searchUsers,
} from "../controller/user.js";
import { auth } from "../middleware/authentication.js";
const router = express.Router();

router.get("/search", searchUsers);
router.get("/user/:id", getUserById);
router.patch("/user/:id", editUser);
router.patch("/user/:id/follow", auth, follow);

export default router;
