import { Router } from "express";
import mech_authController from "../../../controller/auth/mechanicAuth/index.js";
const mech_AuthRoutes = Router();

mech_AuthRoutes.post("/mechLogin", mech_authController.mechLogin);
mech_AuthRoutes.post("/mechRegister", mech_authController.mechRegister);

export default mech_AuthRoutes;
