import { Router } from "express";
import cust_logoutController from "../../../controller/auth/customerAuth/logut.js";
import cust_AuthMiddleware from "../../../middleware/customer/index.js";

const cust_LogoutRouter = Router();

cust_LogoutRouter.post(
  "/logout",
  // cust_AuthMiddleware,
  cust_logoutController.logout
);

export default cust_LogoutRouter;
