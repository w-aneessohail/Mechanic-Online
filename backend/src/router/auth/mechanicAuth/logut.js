import { Router } from "express";
import mech_logoutController from "../../../controller/auth/mechanicAuth/logut.js";
import mech_AuthMiddleware from "../../../middleware/mechanic/index.js";
const mech_LogoutRouter = Router();

mech_LogoutRouter.post(
  "/logout",
  // mech_AuthMiddleware,
  mech_logoutController.logout
);

export default mech_LogoutRouter;
