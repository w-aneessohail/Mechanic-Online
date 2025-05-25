import { Router } from "express";
import cust_authController from "../../../controller/auth/customerAuth/index.js";

const cust_AuthRoutes = Router();

cust_AuthRoutes.post("/login", cust_authController.login);
cust_AuthRoutes.post("/register", cust_authController.register);

export default cust_AuthRoutes;
