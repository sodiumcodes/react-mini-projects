import Router from 'express';
import verifyUser from "../middlewares/auth.middleware.js"
import Auth from "../controllers/auth.controller.js"
const router = Router();

router.route("/login").post(Auth.login);
router.route("/logout").post(verifyUser , Auth.logout);
router.route("/register").post(Auth.register);

router.route("/getMe").get(Auth.getMe);

export default router;