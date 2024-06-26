import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateStudent,
  updateAlumni,
  searchAndDiscover,
  getCurrentUser,
  changeCurrentPassword,
  dashboardData,
  userProfile,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router
  .route("/update-student")
  .post(verifyJWT, upload.single("avatar"), updateStudent);
router
  .route("/update-alumni")
  .post(verifyJWT, upload.single("avatar"), updateAlumni);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/my-profile").get(verifyJWT, getCurrentUser);
router.route("/search-and-discover").get(verifyJWT, searchAndDiscover);
router.route("/home").get(dashboardData);
router.route("/:userId").get(userProfile);

export default router;
