import { Router } from "express";
import mech_PasswordController from "../../controller/mechanic/forgotPassword.js";
import mech_AuthMiddleware from "../../middleware/mechanic/index.js";

const mech_PasswordRouter = Router();

mech_PasswordRouter.post(
  "/otp",
  // mech_AuthMiddleware,
  mech_PasswordController.getotp
);
mech_PasswordRouter.put(
  "/forget-password",
  // mech_AuthMiddleware,
  mech_PasswordController.ForgetPassword
);

export default mech_PasswordRouter;
