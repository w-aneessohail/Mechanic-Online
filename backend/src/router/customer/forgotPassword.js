import { Router } from "express";
import cust_PasswordController from "../../controller/customer/forgotPassword.js";
import cust_AuthMiddleware from "../../middleware/customer/index.js";

const cust_PasswordRouter = Router();

cust_PasswordRouter.post(
  "/otp",
  // cust_AuthMiddleware,
  cust_PasswordController.getotp
);
cust_PasswordRouter.put(
  "/forget-password",
  // cust_AuthMiddleware,
  cust_PasswordController.ForgetPassword
);

export default cust_PasswordRouter;
